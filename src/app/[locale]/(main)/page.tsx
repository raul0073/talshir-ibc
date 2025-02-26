import SectionWithLocale from "@/components/Section/SectionWithLocale";
import About from "@/components/ui/root/About/AboutComp";
import CoopsComp from "@/components/ui/root/Coops/CoopsComp";
import FeaturesComp from "@/components/ui/root/Features/FeaturesComp";
import HeroComp from "@/components/ui/root/Hero/HeroComp";
import ProductsComp from "@/components/ui/root/Stats/Products/ProductsComp";
import { Fragment } from "react";
export default function Home() {
	return (
		<Fragment>
			<HeroComp />
			<SectionWithLocale
				sectionName="about"
				className="bg-white text-white mt-24 min-h-screen">
				<About />
			</SectionWithLocale>
			<SectionWithLocale sectionName="whyus" className="bg-appGray">
				<FeaturesComp />
			</SectionWithLocale>
			<SectionWithLocale sectionName="coops" className="relative bg-appBlue">
				<CoopsComp />
			</SectionWithLocale>
			<SectionWithLocale sectionName="products" className="relative bg-white">
				<ProductsComp />
			</SectionWithLocale>
		</Fragment>
	);
}
