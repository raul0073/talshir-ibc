import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./langSwitcher";

function NavigationLinks({ isScrolled }: { isScrolled: boolean }) {
	const content = useTranslations("Navbar");
	const locale = useLocale();

	return (
		<nav className="hidden md:flex ">
			<ul
				className={`flex gap-8 items-center uppercase text-xl transition-colors duration-300 ease-in-out  ${
					isScrolled ? "text-black" : "text-white/60"
				}`}>
				<li className="hover:text-appBlue">
					<Link href="/#products">{content("products")}</Link>
				</li>
				<li className="hover:text-appBlue">
					<Link href="/#about">{content("about")}</Link>
				</li>
				<li className="hover:text-appBlue border-b border-appBlue/80 px-3 py-1 hover:border-b-2 transition-colors duration-300 ease-in-out">
					<Link href="/#contact">{content("contact")}</Link>
				</li>
				<li className={``}>
					<LocaleSwitcher currentLocale={locale} />
				</li>
			</ul>
		</nav>
	);
}

export default NavigationLinks;
