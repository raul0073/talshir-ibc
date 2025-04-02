'use client'
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./langSwitcher";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function NavigationLinks({ isScrolled }: { isScrolled: boolean }) {
	const content = useTranslations("Navbar");
	const locale = useLocale();
	const path = usePathname();
	return (
		<nav className="hidden md:flex ">
			<ul
				className={cn(`flex gap-8 items-center uppercase text-xl transition-colors duration-300 ease-in-out text-black  ${
					isScrolled  ? "text-black" : "text-white/60"
				} ${path.includes("product") ? 'text-black' : ''} `)}>
				<li className="hover:text-appBlue">
					<Link href="/#products">{content("products")}</Link>
				</li>
				<li className="hover:text-appBlue">
					<Link href="/#about">{content("about")}</Link>
				</li>
				<li className="hover:text-appBlue border-b border-appBlue/80 px-3 py-1 hover:border-b-2 transition-colors duration-300 ease-in-out">
					<Link href="/#contact">{content("contact")}</Link>
				</li>
				<li className={`hidden`}>
					<LocaleSwitcher currentLocale={locale} />
				</li>
			</ul>
		</nav>
	);
}

export default NavigationLinks;
