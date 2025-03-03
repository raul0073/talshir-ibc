
import { BoxesBG } from "./BoxesBG";
import HeroContent from "./HeroContent";
import SectionWithLocale from "@/components/Section/SectionWithLocale";
function HeroComp() {
	return (
		<SectionWithLocale sectionName="hero" className="relative hero h-[90vh] pt-0">
			<BoxesBG />
			<HeroContent />
		</SectionWithLocale>
	);
}

export default HeroComp;
