import HeroComp from "@/components/Root/Hero/HeroComp";
import SectionWithLocale from "@/components/Section/SectionWithLocale";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { Fragment } from "react";

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
			<SectionWithLocale sectionName="about" className="bg-white " id="about">
				<DynamicAboutSection />
			</SectionWithLocale>

			<SectionWithLocale
				sectionName="products"
				className="min-h-screen bg-white"
				id="products">
				<DynamicProductsSection />
			</SectionWithLocale>
			<Separator />
			<SectionWithLocale
				sectionName="contact"
				className="contact relative overflow-hidden"
				id="contact">
				<DynamicContactSection />
			</SectionWithLocale>
		</Fragment>
	);
}
