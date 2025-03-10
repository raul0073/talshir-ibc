import SectionWithLocale from "@/components/Section/SectionWithLocale";
import HeroComp from "@/components/Root/Hero/HeroComp";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicAboutSection = dynamic(
	() => import("@/components/Root/About/AboutComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicProductsSection = dynamic(
	() => import("@/components/Root/Products/ProductsComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicFeaturesSection = dynamic(
	() => import("@/components/Root/Features/FeaturesComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicCoopsSection = dynamic(
	() => import("@/components/Root/Coops/CoopsComp"),
	{
		loading: () => <Skeleton className="w-full h-full" />,
	}
);
const DynamicContactSection = dynamic(
	() => import("@/components/Root/Contact/ContactUsComp"),
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
				className="bg-appGray min-h-screen py-8" id="about">
				<DynamicAboutSection />
			</SectionWithLocale>
			<SectionWithLocale
				sectionName="products"
				className="min-h-screen bg-white" id="products">
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
			<SectionWithLocale sectionName="contact" className="contact relative overflow-hidden" id="contact">
				<DynamicContactSection />
			</SectionWithLocale>
		</Fragment>
	);
}
