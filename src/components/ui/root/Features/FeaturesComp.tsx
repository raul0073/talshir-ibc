import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import {
	GrCertificate,
	GrCycle,
	GrDeliver,
	GrGlobe,
	GrShareOption,
	GrVideo,
} from "react-icons/gr";
import SectionHeader from "../Header/SectionHeader";
import FeatureCard from "./components/FeatureCard";
export type FeatureCard = { label: string; desc: string; icon: ReactNode };
function FeaturesComp() {
	const content = useTranslations("WhyUs");
	const cards = content.raw("cards") ?? {}; // Ensure it's an object

	// Icon mapping for better control
	const iconMap: Record<string, ReactNode> = {
		card1: <GrCertificate className="w-8 h-8 text-amber-400" />,
		card2: <GrVideo className="w-8 h-8 text-amber-50" />,
		card3: <GrDeliver className="w-8 h-8 text-amber-50" />,
		card4: <GrGlobe className="w-8 h-8 text-amber-50" />,
		card5: <GrCycle className="w-8 h-8 text-amber-50" />,
		card6: <GrShareOption className="w-8 h-8 text-amber-50" />,
	};

	// Convert JSON into an array
	const featuresList: FeatureCard[] = Object.entries(cards).map(
		([key, value]) => ({
			label: (value as { title: string }).title,
			desc: (value as { description: string }).description,
			icon: iconMap[key],
		})
	);

	// Optimized title handling
	const titleParts = content("title").split(" ");
	const lastWord = titleParts.pop();
	const title = titleParts.join(" ");

	return (
		<div className="container mx-auto p-6 md:p-24">
			<SectionHeader className="mb-6">
				{title} <span className="font-bold capitalize">{lastWord}</span>
			</SectionHeader>
			<p className="max-w-xl text-transparent bg-gradient-to-br from-zinc-600 to-stone-600 bg-clip-text text-lg md:text-xl">
				{content("description")}
			</p>
			<div className="features-grid wrapper w-full h-full flex justify-center items-center mt-24">
			
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
					{featuresList.map((feature, i) => (
						<FeatureCard
							key={`${feature.label}-${i}`}
							text={feature.label}
							desc={feature.desc}
							icon={feature.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default FeaturesComp;

