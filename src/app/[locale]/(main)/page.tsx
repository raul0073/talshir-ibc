import SectionWithLocale from "@/components/Section/SectionWithLocale";
import ContactUsCopmp from "@/components/ui/root/Contact/ContactUsCopmp";
import About from "@/components/ui/root/About/AboutComp";
import CoopsComp from "@/components/ui/root/Coops/CoopsComp";
import FeaturesComp from "@/components/ui/root/Features/FeaturesComp";
import HeroComp from "@/components/ui/root/Hero/HeroComp";
import ProductsComp from "@/components/ui/root/Products/ProductsComp";
import { Fragment } from "react";
export default function Home() {
	return (
		<Fragment>
			<HeroComp />
			<SectionWithLocale
				sectionName="about"
				className="bg-appGray sm:mt-24 min-h-screen ">
				<About />
			</SectionWithLocale>
			<SectionWithLocale sectionName="products" className="bg-white" id="products">
				<ProductsComp />
			</SectionWithLocale>
			<SectionWithLocale sectionName="whyus" className="bg-appGray" id="whyus">
				<FeaturesComp />
			</SectionWithLocale>
			<SectionWithLocale sectionName="coops" className="relative bg-appBlue" id="coops">
				<CoopsComp />
			</SectionWithLocale>
			<SectionWithLocale sectionName="contact" className="bg-white" id="contact">
				<ContactUsCopmp />
			</SectionWithLocale>

		</Fragment>
	);
}
