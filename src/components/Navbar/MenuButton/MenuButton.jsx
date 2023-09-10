import React from "react";
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";
import { MenuContainerStyled } from "./MenuButtonStyles";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { toggleNavbar } from "../../../redux/navbar/navbarSlice";

const MenuButton = () => {
	const { navbar, cart } = useSelector((state) => state);
	const dispatch = useDispatch();
	return !navbar.open ? (
		<motion.div whileTap={{ scale: 0.95 }}>
			<MenuContainerStyled
				onClick={() => {
					dispatch(toggleNavbar());
					cart.open && dispatch(toggleHiddenCart());
				}}>
				<HiOutlineBars3 />
			</MenuContainerStyled>
		</motion.div>
	) : (
		<motion.div whileTap={{ scale: 0.95 }}>
			<MenuContainerStyled onClick={() => dispatch(toggleNavbar())}>
				<HiOutlineXMark />
			</MenuContainerStyled>
		</motion.div>
	);
};

export default MenuButton;
