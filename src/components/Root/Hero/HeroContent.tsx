"use client";
import logo2 from "@/app/assets/images/logo/IBC-300x230-noBG.png";
import ShadowButton from "@/components/ui/shadow-button";
import { motion, stagger, useAnimate, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import SplitType from "split-type";
import Tag from "./Tag";
function HeroContent() {
	const t = useTranslations("Hero");
	//eslint-disable-next-line
	const [titleScope, titleAnimate] = useAnimate();
	const { scrollY } = useScroll();
	const titleRef = useRef<HTMLParagraphElement>(null);
	const content = useMemo(() => {
		return {
			highlight: t("highlight"),
			description: t("description"),
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
		<div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full z-10">
			<div className="w-2/3 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 ">
				<div className="hidden sm:block">
					<Tag>✨ {content.highlight}</Tag>
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 0.95 }}
					transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
					exit={{ scale: 0.1, opacity: 0 }}
					viewport={{ once: true }}
					className={`flex justify-start `}>
					<Image
						src={logo2}
						alt="talshir-ibc logo 300X300"
						width={300}
						height={300}
						loading="eager"
						className=" z-10 relative hover:-translate-y-2 transition-transform duration-200 ease-in-out saturate-200 w-36 sm:w-64 h-auto"
					/>
				</motion.div>
			</div>
			<div className="container mx-auto w-full md:w-2/3 lg:w-1/2 p-2 mt-8 sm:mt-0">
				<div className="relative w-full max-w-xs sm:max-w-4xl mx-auto h-full flex flex-col items-center text-center">
					<div className="flex gap-4 items-center">
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							ref={titleRef}
							viewport={{ once: true }}
							className="text-4xl md:text-6xl text-blue-500 max-w-4xl font-semibold capitalize">
							{content.description}
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: "60%" }}
						whileInView={{ opacity: 1, y: "100%" }}
						transition={{ duration: 0.8, ease: "easeInOut", delay: 2.5 }}
						viewport={{ once: true }}
						className="actions sm:mt-16 w-full flex flex-col md:flex-row justify-center gap-8">
						<Link href="#products">
							<ShadowButton
								variant="default"
								className="w-2/3 mx-auto md:w-full">
								{content.actions.products}
							</ShadowButton>
						</Link>
						<Link href="#contact">
							<ShadowButton
								variant="outline"
								className="w-2/3 mx-auto md:w-full">
								{content.actions.contact}
							</ShadowButton>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default HeroContent;
