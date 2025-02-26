import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent } from "react";
import { menuOptions } from "./data/MenuOptions";

interface MobileNavigationProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const menuAnimation = {
	initial: { height: 0, opacity: 0 },
	animate: { height: "100vh", opacity: 1 },
	exit: { height: 0 },
};

function MobileNavigation({ isOpen, setIsOpen }: MobileNavigationProps) {
	function handleNavigationMove(e: MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		setIsOpen(false);
		const url = new URL(e.currentTarget.href);
		const hash = url.hash;
		const target = document.querySelector(hash);
		if (!target) return;
		target.scrollIntoView({ behavior: "smooth" });
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
					className="mobile-navigation-wrapper w-full fixed top-20 left-0 bg-white dark:bg-zinc-900 z-30 flex flex-col justify-start overflow-hidden">
					<nav className="text-left uppercase w-full">
						<ul className="pt-12 px-4 w-full">
							{menuOptions.map(({ label, href }) => (
								<li
									key={href}
									className="relative group/nav-item transition-all duration-300 ease-in-out font-axure  border-b dark:border-stone-200/10 border-zinc-800/10 py-8">
									<a
										href={href}
										onClick={handleNavigationMove}
										className="group/nav-item flex h-full justify-between items-center dark:text-white/40 text-zinc-900/60 text-4xl group-hover/nav-item:pl-4 group-hover/nav-item:dark:text-appYellow group-hover/nav-item:text-appBlue transition-all duration-500 ease-in-out isolate">
										{label}
										
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
