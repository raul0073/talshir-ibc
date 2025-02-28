import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./langSwitcher";

function NavigationLinks({ isScrolled }: { isScrolled: boolean }) {
	const content = useTranslations("Navbar");
	const locale = useLocale();
	const isRTL = locale === "he" || locale === "ar";
	return (
		<nav className="hidden md:flex ">
			<ul
				className={`flex gap-8 items-center uppercase text-xl text-black/80 ${
					isScrolled && "text-appBlue/80"
				}`}>
				<li className="hover:text-appBlue">
					<Link href="#products">{content("products")}</Link>
				</li>
				<li className="hover:text-appBlue">
					<Link href="#about">{content("about")}</Link>
				</li>
				<li className="hover:text-appBlue border border-appBlue/80 px-3 py-1 hover:border-appBlue">
					<Link href="#contact">{content("contact")}</Link>
				</li>
				<li className={`${isRTL ? "border-r" : "border-l"}`}>
					<LocaleSwitcher currentLocale={locale} />
				</li>
			</ul>
		</nav>
	);
}

export default NavigationLinks;

{
	/* <ShadowButton variant={'custom'} className="btn-outline-blue">{content("contact")} </ShadowButton> */
}
