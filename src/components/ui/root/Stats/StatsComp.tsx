"use client";

import { CountUp } from "countup.js";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import patent from "@/app/assets/images/certifications/certificate.png";
import clients from "@/app/assets/images/certifications/handshake.png";
import world from "@/app/assets/images/certifications/planet-earth.png";
import products from "@/app/assets/images/certifications/repair.png";

export type StatsDataType = {
  id: string;
  title: string;
  value: number;
  icon: string;
};

export default function StatsBar() {
	const locale = useLocale()
  const content = useTranslations("StatsComp");
  const statsDivRef = useRef(null);
  const hasAnimated = useRef(false);
  const inView = useInView(statsDivRef, { once: true });

  const memoStatsData = useMemo(
    () => [
      { id: "patents", title: content.raw("patents"), value: 6, icon: patent },
      { id: "clients", title: content.raw("clients"), value: 26, icon: clients },
      { id: "products", title: content.raw("products"), value: 19, icon: products },
      { id: "countries", title: content.raw("countries"), value: 5, icon: world },
    ],
    [content]
  );

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      memoStatsData.forEach(({ id, value }) => {
        const countUp = new CountUp(id, value);
        if (!countUp.error) countUp.start();
        else console.error(`CountUp error for ${id}:`, countUp.error);
      });
      hasAnimated.current = true;
    }
  }, [inView, memoStatsData]);

  const isRTL = locale === "he" || locale === "ar"
  return (
    <div ref={statsDivRef} dir={`${isRTL ? 'rtl' : ''}`} className="grid w-full grid-cols-2 md:grid-cols-4 place-items-center py-8 gap-8">
      {memoStatsData.map(({ id, title, icon }) => (
        <div key={id} className="stat flex items-center gap-6 text-md md:text-lg">
          <div className="stat-figure text-white text-xs">
            <Image src={icon} alt={title} className="h-10 w-10 md:h-12 md:w-12 grayscale" />
          </div>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-bold text-white after:content-['+']"
              id={id}
            />
            <div className="stat-title text-stone-900">{title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
