"use client";
import { useEffect, useState } from "react";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import MobileNavigation from "./MobileNavigation";
import logo from './../../../../app/assets/images/logo/IBC-300x230-noBG.png'
import Image from "next/image";
import NavigationLinks from "./NavigationLinks";
import { useScroll } from "framer-motion";


function NavigationComp() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const { scrollY } = useScroll();
	useEffect(() => {
		// Listen to changes in scrollY
		const unsubscribe = scrollY.on("change", (latest) => {
			setIsScrolled(latest > 10);
		});

		return () => unsubscribe(); // Cleanup function
	}, [scrollY]);

	return (
		<header className={`navbar-header fixed top-0 left-0 w-full z-40 h-fit  ${isScrolled ? 'border-b shadow-md shadow-appBlue/30 border-appYellow/10  bg-white':'bg-transparent'}`}>
			<div className="container mx-auto">
				<div className={`wrapper flex justify-between items-center py-4 px-4 `}>
					<div className="logo transition-transform duration-300 ease-in-out">
						<Image
							src={logo}
							loading="eager"
							alt="Logo"
							width={70}
							height={70}
							className={`${isScrolled ? 'transition-transform duration-300 ease-in-out' :'opacity-45'}`}
						/>
					</div>
					<NavigationLinks isScrolled={isScrolled} />
						
					<HamburgerMenuBtn
						data-umami-event="hamburger open"
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						aria-label={isOpen ? "Close menu" : "Open menu"}
					/>
					<MobileNavigation setIsOpen={setIsOpen} isOpen={isOpen} />
				</div>
			</div>
		</header>
	);
}

export default NavigationComp;
