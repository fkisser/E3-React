import React from "react";
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";
import { MenuContainerStyled } from "./MenuButtonStyles";
import { motion } from "framer-motion";
import { useMenuContext } from "../../../context/MenuContext";

const MenuButton = () => {
	const { open, handleClick } = useMenuContext();
	return !open ? (
		<motion.div whileTap={{ scale: 0.95 }}>
			<MenuContainerStyled onClick={handleClick}>
				<HiOutlineBars3 />
			</MenuContainerStyled>
		</motion.div>
	) : (
		<motion.div whileTap={{ scale: 0.95 }}>
			<MenuContainerStyled onClick={handleClick}>
				<HiOutlineXMark />
			</MenuContainerStyled>
		</motion.div>
	);
};

export default MenuButton;
