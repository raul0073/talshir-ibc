import Footer from "@/components/ui/root/Footer/Footer";
import NavigationComp from "@/components/ui/root/Navbar/Navbar";
import { Fragment, ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<NavigationComp />
			<main className="mt-20">{children}</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	);
}

export default Layout;
