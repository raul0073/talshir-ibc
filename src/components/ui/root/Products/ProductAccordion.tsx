"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { StaticImageData } from "next/image";
import ButtonArrow from "../../button-arrow";
export type ProductAccordionProps = {
	modelName: string;
	modelDesc: string;
	modelImg: StaticImageData;
};
export function ProductAccordion({
	modelName,
	modelDesc,
	modelImg,
}: ProductAccordionProps) {
	const locale = useLocale();
	const isRtl = locale === "he" || locale === "ar";

	return (
		<Accordion
			type="single"
			collapsible
			className="w-full"
			dir={isRtl ? "rtl" : "ltr"}>
			<AccordionItem value="item-1">
				<CustomAccordionTrigger
					title={modelName}
					description={modelDesc}
					imageSrc={modelImg}
				/>
				<AccordionContent className="w-full">
					<div className="w-full flex flex-col xl:flex-row justify-between xl:items-end gap-8 lg:text-lg mt-4">
						<p className="max-w-2xl">
							Yes. It adheres to the WAI-ARIA design pattern. <br />
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium temporibus voluptate, quam architecto fuga illo omnis
							soluta rerum aut sequi. Possimus iusto dolorem beatae? Consectetur
							officiis laboriosam necessitatibus dolore totam.
						</p>
						<div className="w-fit grid grid-cols-3 gap-2 xl:gap-6">
							<AccordionChart value={60} label="metal" />
							<AccordionChart value={35} label="iron" />
							<AccordionChart value={4.8} label="water" />
						</div>
						<ButtonArrow link={`product/${decodeURIComponent(modelName)}`}  />
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

interface AccordionChartProps {
	value: number;
	label: string;
}

export const AccordionChart = ({ value, label }: AccordionChartProps) => {
	const strokeDasharray = 141;
	const strokeDashoffset = ((100 - value) / 100) * strokeDasharray;

	return (
		<div className="flex justify-center items-center w-24 h-24 relative scale-75 sm:scale-100">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 100 100"
				className="absolute">
				<circle
					cx="50"
					cy="50"
					r="45"
					stroke="#e5e7eb"
					strokeWidth="6"
					fill="transparent"
				/>
				<motion.circle
					cx="50"
					cy="50"
					r="45"
					stroke="url(#gradient)"
					strokeWidth="6"
					fill="transparent"
					strokeLinecap="round"
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					initial={{ strokeDashoffset: strokeDasharray }}
					animate={{ strokeDashoffset }}
					transition={{ duration: 1 }}
				/>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#9333ea" />
						<stop offset="100%" stopColor="#2563eb" />
					</linearGradient>
				</defs>
			</svg>
			<div className="absolute flex flex-col items-center">
				<span className="uppercase">{label}</span>
				<span className="font-bold text-xl">{value}%</span>
			</div>
		</div>
	);
};
