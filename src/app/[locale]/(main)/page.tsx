import SectionWithLocale from "@/components/Section/SectionWithLocale";
import HeroComp from "@/components/ui/root/Hero/HeroComp";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const DynamicAboutSection = dynamic(
	() => import("@/components/ui/root/About/AboutComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicProductsSection = dynamic(
	() => import("@/components/ui/root/Products/ProductsComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicFeaturesSection = dynamic(
	() => import("@/components/ui/root/Features/FeaturesComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicCoopsSection = dynamic(
	() => import("@/components/ui/root/Coops/CoopsComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicContactSection = dynamic(
	() => import("@/components/ui/root/Contact/ContactUsComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);

export default function Home() {
	return (
		<Fragment>
			<HeroComp />
			<SectionWithLocale
				sectionName="about"
				className="bg-appGray sm:mt-24 min-h-screen ">
				<DynamicAboutSection />
			</SectionWithLocale>
			<SectionWithLocale
				sectionName="solutions"
				className="min-h-screen bg-white">
				<DynamicProductsSection />
			</SectionWithLocale>
			<SectionWithLocale sectionName="whyus" className="bg-appGray" id="whyus">
				<DynamicFeaturesSection />
			</SectionWithLocale>
			<SectionWithLocale
				sectionName="coops"
				className="relative bg-appBlue"
				id="coops">
				<DynamicCoopsSection />
			</SectionWithLocale>
			<SectionWithLocale sectionName="contact" className="contact" id="contact">
				<DynamicContactSection />
			</SectionWithLocale>
		</Fragment>
	);
}
