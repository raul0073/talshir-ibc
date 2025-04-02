"use client";
import logo from "@/app/assets/images/logo/logo.png";
import { motion, stagger, useAnimate, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import SplitType from "split-type";
function HeroContent() {
	const t = useTranslations("Hero");
	//eslint-disable-next-line
	const [titleScope, titleAnimate] = useAnimate();
	const { scrollY } = useScroll();
	const titleRef = useRef<HTMLParagraphElement>(null);
	const content = useMemo(() => {
		return {
			line1: t("line1"),
			line2: t("line2"),
			line3: t("line3"),
			title: t("title"),
			actions: {
				products: t("actions.products"),
				contact: t("actions.contact"),
			},
		};
	}, [t]);
	useEffect(() => {
		if (titleRef.current) {
			// Split text in the heading
			new SplitType(titleRef.current, {
				types: "lines,words",
				tagName: "span",
			});

			// Select the split words and animate them
			const titleToAnimate = [...titleRef.current.querySelectorAll(".word")];
			titleAnimate(
				titleToAnimate,
				{ transform: "translateY(0)", opacity: 1 },
				{ duration: 0.5, delay: stagger(0.2) }
			);
		}
	}, [titleAnimate, scrollY]);
	return (
		<div className="text-center absolute left-1/2 -translate-x-1/2 sm:top-2/3 top-1/2 -translate-y-1/2 w-full z-10">
			<div className="w-2/3 mx-auto flex justify-start items-start gap-4 mt-24 sm:mt-0">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 0.95 }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
					exit={{ scale: 0.1, opacity: 0 }}
					viewport={{ once: true }}
					className={`relative md:-top-24 lg:-top-44 lg:-right-36 `}>
					<Image
						src={logo}
						alt="talshir-ibc logo 300X300"
						width={300}
						height={300}
						className=" z-10 relative hover:-translate-y-2 transition-transform duration-200 ease-in-out saturate-200 w-36 sm:w-64 h-auto"
					/>
				</motion.div>
			</div>
			<div className="container mx-auto w-full  p-2 mt-8 sm:mt-0">
				<div className="relative w-full  mx-auto h-full flex flex-col items-center text-center">
					<div className="w-full justify-center flex gap-4 items-center">
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							ref={titleRef}
							viewport={{ once: true }}
							className="heroText text-4xl lg:text-5xl capitalize">
							{content.title} <br />{" "}
							{content.line1} <br />{" "}
							{content.line2} <br />{" "}
							{content.line3} 
						</motion.h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroContent;
