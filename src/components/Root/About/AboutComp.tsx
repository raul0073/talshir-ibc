"use client";
import art from "@/app/assets/images/about/man_point.png";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HTMLAttributes, useMemo } from "react";
import SectionHeader from "../Header/SectionHeader";
function About() {
	const t = useTranslations("About");
	const content = useMemo(() => {
		return {
			title: t("title"),
			line1: t("line1"),
			line2: t("line2"),
			line3: t("line3"),
			line4: t("line4"),
			line5: t("line5"),
			line6: t("line6"),
			footer1: t("footer.line1"),
			footer2: t("footer.line2"),
			footer3: t("footer.line3"),
		};
	}, [t]);
	return (
		<div className="relative container mx-auto py-28">
			<div className=" w-full max-w-7xl mx-auto h-full px-2 flex flex-col justify-center items-center text-center space-y-2 sm:space-y-4">
				<SectionHeader className="mb-12">
					{content.title.split(" ")[0]}{" "}
					<span className="font-[900]">{content.title.split(" ")[1]}</span>
				</SectionHeader>
				<motion.p
					initial={{ opacity: 0, y: "30%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
					viewport={{ once: true }}
					className="sm:text-3xl">
					{content.line1}
				</motion.p>{" "}
				<br />
				<motion.p
					initial={{ opacity: 0, y: "40%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
					viewport={{ once: true }}
					className="text-zinc-800 sm:text-3xl">
					{content.line2}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "50%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
					viewport={{ once: true }}
					className="text-zinc-800 sm:text-3xl">
					{content.line3}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "60%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
					viewport={{ once: true }}
					className="text-zinc-800 sm:text-3xl">
					{content.line4}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "70%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
					viewport={{ once: true }}
					className="text-zinc-800 sm:text-3xl">
					{content.line5}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "40%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
					viewport={{ once: true }}
					className="text-zinc-800 sm:text-3xl">
					{content.line6}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "80%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
					viewport={{ once: true }}
					className="sm:text-4xl text-appSubTextBlue font-bold pt-12 font-suez">
					{content.footer1}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "80%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
					viewport={{ once: true }}
					className="sm:text-4xl text-appSubTextBlue font-bold font-suez">
					{content.footer2}
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: "80%" }}
					whileInView={{ opacity: 1, y: "0" }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
					viewport={{ once: true }}
					className="sm:text-4xl text-appSubTextBlue font-bold font-suez">
					{content.footer3}
				</motion.p>
			</div>
			<div className="w-full  h-6 sm:h-12 relative ">
				<Image
					src={art}
					width={300}
					height={300}
					className="absolute -bottom-44 left-12 md:left-1/4 -translate-x-1/2 z-30 w-44 lg:w-72 h-auto"
					alt="asd"
				/>
			</div>
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
