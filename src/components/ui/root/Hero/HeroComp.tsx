import { useLocale } from "next-intl";
import { BoxesBG } from "./BoxesBG";
import HeroContent from "./HeroContent";
function HeroComp() {
	const locale = useLocale();
	return (
		<section className="relative hero  h-[90vh] ">
			<BoxesBG />
			<HeroContent locale={locale} />
		</section>
	);
}

export default HeroComp;
