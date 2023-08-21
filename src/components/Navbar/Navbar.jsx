import {
	LinksContainerStyled,
	LogoNavStyled,
	NavLinkStyled,
	NavbarContainerStyled,
	NavbarContentWrapperStyled,
	UserNavLinkStyled,
} from "./NavbarStyles";
import Logo from "../UI/Logo/Logo";
import { HiHome } from "react-icons/hi";
import { FaUserAlt, FaPowerOff } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmojiPeople } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { motion } from "framer-motion";
import MenuButton from "../UI/MenuButton/MenuButton";
import { useMenuContext } from "../../context/MenuContext";
const Navbar = () => {
	const { open } = useMenuContext();
	return (
		<NavbarContainerStyled>
			<NavbarContentWrapperStyled>
				<LogoNavStyled>
					<Logo min />
				</LogoNavStyled>

				<MenuButton />

				<LinksContainerStyled open={open}>
					<NavLinkStyled to={"/"}>
						<motion.div whileTap={{ scale: 0.95 }}>
							<HiHome />
							<span>Home</span>
						</motion.div>
					</NavLinkStyled>

					<NavLinkStyled to={"/products"}>
						<motion.div whileTap={{ scale: 0.95 }}>
							<BiSolidCategory />
							<span>Productos</span>
						</motion.div>
					</NavLinkStyled>

					<NavLinkStyled to={"/about"}>
						<motion.div whileTap={{ scale: 0.95 }}>
							<MdEmojiPeople />
							<span>Nosotros</span>
						</motion.div>
					</NavLinkStyled>

					<NavLinkStyled to={"/contact"}>
						<motion.div whileTap={{ scale: 0.95 }}>
							<FaMessage />
							<span>Contactanos</span>
						</motion.div>
					</NavLinkStyled>

					{/* <UserNavLinkStyled to={"/login"}>
						<span>Iniciar sesión</span>
						<FaUserAlt />
					</UserNavLinkStyled> */}
				</LinksContainerStyled>
			</NavbarContentWrapperStyled>
		</NavbarContainerStyled>
	);
};

export default Navbar;
