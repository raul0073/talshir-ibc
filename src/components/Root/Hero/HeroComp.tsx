import SectionWithLocale from "@/components/Section/SectionWithLocale";
import Image from "next/image";
import HeroContent from "./HeroContent";
function HeroComp() {
	return (
		<SectionWithLocale
			sectionName="hero"
			className="relative hero h-screen pt-0 pb-0">
			<div className="absolute left-0 top-0 w-full h-full inset-0 bg-black/80 z-0 backdrop-blur-sm"></div>
			<div className="absolute left-0 top-0 w-full h-full object-cover -z-10 ">
				<Image
					src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="cover"
					layout="fill"
					className="w-full h-full"
				/>
			</div>
			<HeroContent />
		</SectionWithLocale>
	);
}

export default HeroComp;
