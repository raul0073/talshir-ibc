import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { MouseEvent } from "react";
import { getMenusOptions } from "./data/menus";
import LocaleSwitcher from "./langSwitcher";
import { useRouter } from "next/navigation";

interface MobileNavigationProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const menuAnimation = {
	initial: { width: 0, opacity: 0, height: "100vh" },
	animate: { width: "100vw", opacity: 1 },
	exit: { width: 0 },
};

function MobileNavigation({ isOpen, setIsOpen }: MobileNavigationProps) {
	const content = useTranslations("Navbar");
	const MENUS_OPTIONS = getMenusOptions(content);
	const locale = useLocale();
	const router = useRouter()
	const isRTL = locale === "he" || locale === "ar";
	function handleNavigationMove(e: MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		setIsOpen(false);
	  
		const url = new URL(e.currentTarget.href);
		const hash = url.hash;
		const targetPath = `/${locale}`; // e.g., /he or /en
	  
		// Get current pathname only (no query or hash)
		const currentPath = window.location.pathname;
	  
		if (currentPath !== targetPath) {
		  // Navigate to root with the hash
		  return router.push(`${targetPath}/${hash}`)
		}
	  
		// Already on root — scroll to the section
		const target = document.querySelector(hash);
		if (target) {
		  setTimeout(() => {
			target.scrollIntoView({ behavior: "smooth" });
		  }, 100); // slight delay to ensure layout is ready
		}
	  }
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="mobile-navigation"
					variants={menuAnimation}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="mobile-navigation-wrapper w-full mx-auto fixed top-20 left-0 bg-white z-30 flex flex-col justify-start overflow-hidden border-t">
					<nav className={`uppercase w-full ${isRTL && "pr-6"}`}>
						<ul className="pt-12 px-4 w-full">
							{MENUS_OPTIONS.MAIN.map(({ label, href }) => (
								<li
									key={href}
									className="relative group/nav-item transition-all duration-300 ease-in-out  border-b  border-zinc-800/10 py-4">
									<a
										href={href}
										onClick={handleNavigationMove}
										className="group/nav-item flex h-full justify-between items-center text-zinc-900 text-xl group-hover/nav-item:pl-4 group-hover/nav-item:text-appBlue transition-all duration-500 ease-in-out isolate">
										{label}{" "}
									</a>
								</li>
							))}
							<li className="relative group/nav-item transition-all duration-300 ease-in-out  border-b dark:border-stone-200/10 border-zinc-800/10 py-4">
								<span className="group/nav-item flex h-full justify-between items-center text-zinc-900 text-4xl group-hover/nav-item:pl-4  group-hover/nav-item:text-appBlue transition-all duration-500 ease-in-out isolate">
									<LocaleSwitcher currentLocale={locale} className="text-lg" />
								</span>
							</li>
						</ul>
						<ul className="pt-24 px-4 w-full">
							{MENUS_OPTIONS.LEGAL.map(({ label, href }) => (
								<li
									key={href}
									className="relative group/nav-item transition-all duration-300 ease-in-out  border-b border-white/40 py-2">
									<a
										href={`#${href}`}
										onClick={handleNavigationMove}
										className="group/nav-item flex h-full justify-between items-center text-zinc-700 group-hover/nav-item:pl-2 transition-all duration-500 ease-in-out isolate text-sm">
										{label}{" "}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default MobileNavigation;
