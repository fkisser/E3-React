import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { LayoutWrapper } from "./LayoutStyles";
import { useEffect } from "react";
import { useMenuContext } from "../../context/MenuContext";

const Layout = ({ children }) => {
	const { pathname } = useLocation();
	const { open, handleClick } = useMenuContext();
	useEffect(() => {
		window.scrollTo(0, 0);
		open && handleClick();
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
