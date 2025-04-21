"use client";
import art from "@/app/assets/images/about/man_point.png";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, HTMLAttributes, useMemo } from "react";
import SectionHeader from "../Header/SectionHeader";
import Head from "next/head";
function About() {
	const t = useTranslations("About");
	const locale = useLocale()
	const isRTL = locale === 'he'
	const content = useMemo(() => {
		return {
			title: t("title"),
			lines : {
				line1: t("line1"),
			line2: t("line2"),
			line3: t("line3"),
			line4: t("line4"),
			line5: t("line5"),
			line6: t("line6"),
			
			},
			footer: {
				footer1: t("footer.line1"),
				footer2: t("footer.line2"),
				footer3: t("footer.line3"),
			}
		};
	}, [t]);
	return (
		<Fragment>
		<Head>
			<title>
				About | Talshir IBC – Innovative Construction Solutions Since 1994
			</title>
			<meta
				name="description"
				content="Discover Talshir IBC, an Israeli construction company established in 1994, specializing in innovative technologies for framing, plastering, and finishing."
			/>
			<meta
				name="keywords"
				content="Talshir IBC, construction technology, Israeli construction company, framing innovations, plastering solutions, finishing techniques, construction patents"
			/>
			<meta name="author" content="Talshir IBC" />
			<meta
				property="og:title"
				content="About | Talshir IBC – Innovative Construction Solutions Since 1994"
			/>
			<meta
				property="og:description"
				content="Learn about Talshir IBC's journey in revolutionizing construction with patented technologies in Israel and abroad."
			/>
			<meta
				property="og:url"
				content="https://talshir-ibc.com/en/talshir-ibc/"
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:image"
				content="https://talshir-ibc.com/path-to-your-og-image.jpg"
			/>
			<meta name="robots" content="index, follow" />
			<link rel="canonical" href="https://talshir-ibc.com/en/talshir-ibc/" />
		</Head>

		<section className="relative container mx-auto py-28">
				<article className="w-full max-w-8xl mx-auto h-full px-2 flex flex-col justify-center items-center text-center space-y-2 sm:space-y-4">
					{/* Heading */}
					<SectionHeader className="mb-12">
						{content.title.split(" ")[0]}{" "}
						<span className="font-[900]">{content.title.split(" ")[1]}</span>
					</SectionHeader>

					{/* Body lines */}
					{Object.values(content.lines).map((line, i) => (
						<motion.p
							key={i}
							initial={{ opacity: 0, y: `${30 + i * 10}%` }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								ease: "easeInOut",
								delay: 0.4 + i * 0.1,
							}}
							viewport={{ once: true }}
							className={`${isRTL ? "sm:text-3xl" : "sm:text-2xl capitalize"}`}
						>
							{line}
						</motion.p>
					))}

					{/* Footer highlights */}
					{Object.values(content.footer).map((footer, i) => (
						<motion.p
							key={`footer-${i}`}
							initial={{ opacity: 0, y: "80%" }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
							viewport={{ once: true }}
							className={`sm:text-4xl text-appSubTextBlue font-bold font-suez capitalize ${
								i === 0 ? "pt-12" : ""
							}`}
						>
							{footer}
						</motion.p>
					))}
				</article>

				{/* Decorative image */}
				<div className="w-full h-6 sm:h-12 relative">
					<Image
						src={art}
						alt="graphic"
						className="absolute -bottom-48 left-12 md:left-1/4 -translate-x-1/2 z-30 w-44 lg:w-72 h-auto"
					/>
				</div>
			</section>
	</Fragment>
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
