'use client'
import Footer from "@/components/Root/Footer/Footer";
import NavigationComp from "@/components/Root/Navbar/Navbar";
import { Fragment, ReactNode, useEffect, useState } from "react";

function Layout({ children }: { children: ReactNode }) {
	const [isClient, setIsClient] = useState<boolean>(false);
	useEffect(() => {
		setIsClient(true);
	  }, []);
	
	  if (!isClient) {
		return null; 
	  }
	return (
		<Fragment>
			<NavigationComp />
			<main className="">{children}</main>
			<footer className="bg-appTextBlue">
				<Footer />
			</footer>
		</Fragment>
	);
}

export default Layout;
