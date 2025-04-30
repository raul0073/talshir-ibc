'use client'
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./langSwitcher";
import { usePathname } from "next/navigation";

function NavigationLinks({ isScrolled }: { isScrolled: boolean }) {
	const content = useTranslations("Navbar");
	const locale = useLocale();
	const path = usePathname();
	return (
		<nav className="hidden md:flex ">
			<ul
				className={cn(`flex gap-8 items-center uppercase text-xl transition-colors duration-300 ease-in-out  ${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`)}>
				<li className={`${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`}>
					<Link href={`${path}/#products`}>{content("products")}</Link>
				</li>
				<li className={`${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`}>
					<Link href={`${path}/#about`}>{content("about")}</Link>
				</li>
				<li className={`${
					isScrolled ? "text-zinc-700 hover:text-appTextBlue" : "text-zinc-700 hover:text-zinc-900"
				}`}>
					<Link href={`${path}/#contact`}>{content("contact")}</Link>
				</li>
				<li className={``}>
					<LocaleSwitcher currentLocale={locale} />
				</li>
			</ul>
		</nav>
	);
}

export default NavigationLinks;
