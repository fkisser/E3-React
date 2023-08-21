import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { LayoutWrapper } from "./LayoutStyles";
import { useEffect } from "react";

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Navbar />
			<LayoutWrapper>{children}</LayoutWrapper>
			<Footer />
		</>
	);
};

export default Layout;
