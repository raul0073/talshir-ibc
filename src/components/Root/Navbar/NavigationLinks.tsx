'use client'
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./langSwitcher";

function NavigationLinks({ isScrolled }: { isScrolled: boolean }) {
	const content = useTranslations("Navbar");
	const locale = useLocale();
	return (
		<nav className="hidden md:flex ">
			<ul
				className={cn(`flex gap-8 items-center uppercase text-xl transition-colors duration-300 ease-in-out  ${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`)}>
				<li className={`${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`}>
					<Link href="/#products">{content("products")}</Link>
				</li>
				<li className={`${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`}>
					<Link href="/#about">{content("about")}</Link>
				</li>
				<li className={`${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`}>
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
