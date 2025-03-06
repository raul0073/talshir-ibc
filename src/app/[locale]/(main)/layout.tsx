'use client'
import Footer from "@/components/ui/root/Footer/Footer";
import NavigationComp from "@/components/ui/root/Navbar/Navbar";
import { Fragment, ReactNode, useEffect, useState } from "react";

function Layout({ children }: { children: ReactNode }) {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	  }, []);
	
	  if (!isClient) {
		return null; 
	  }
	return (
		<Fragment>
			<NavigationComp />
			<main className="mt-20">{children}</main>
			<footer className="bg-appBlue">
				<Footer />
			</footer>
		</Fragment>
	);
}

export default Layout;
