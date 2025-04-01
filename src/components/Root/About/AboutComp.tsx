"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HTMLAttributes, useMemo } from "react";
import SectionHeader from "../Header/SectionHeader";
import Image from "next/image";
import art from '@/app/assets/images/about/man_point.png'
function About() {
	const t = useTranslations("About");
	const content = useMemo(() => {
		return {
			title: t("title"),
			footer: t("footer"),
			innovation: t("innovation"),
			header: t("header"),
		};
	}, [t]);
	return (
		<div className="relative container mx-auto py-28">
			<div className=" w-full max-w-7xl mx-auto h-full px-2 flex flex-col justify-center items-center text-center">
				<SectionHeader className="mb-12">
					{content.title.split(" ")[0]}{" "}
					<span className="font-[900]">{content.title.split(" ")[1]}</span>
				</SectionHeader>
				<motion.p
					initial={{ opacity: 0, y: "-30%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
					viewport={{ once: true }}
					className="sm:text-2xl mb-2">
					{content.header}
				</motion.p>{" "}
				<br />
				<motion.p
					initial={{ opacity: 0, y: "40%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
					viewport={{ once: true }}
					className="text-zinc-800 mt-6 sm:text-2xl">
					{content.innovation} <br />
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "80%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
					viewport={{ once: true }}
					className="sm:text-2xl mt-6 text-appSubTextBlue font-bold">
					{content.footer}
				</motion.p>
			
			</div>
			<Image
			    src={art}
                width={300}                height={300}
                className="absolute -bottom-24 md:-left-24 left-0 z-50 w-44 lg:w-72 h-auto"
				alt="asd"
            />
		</div>
	);
}

export default About;

// play button
export const PlayButton = ({ ...props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<div {...props}>
			<span className="relative p-4 cursor-pointer flex justify-center items-center w-full h-full">
				<svg
					width="18"
					height="22"
					viewBox="0 0 18 22"
					fill="currentColor"
					className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M18 11L0 21.3923V0.607696L18 11Z" fill="black" />
				</svg>
			</span>
		</div>
	);
};
