import React from "react";
import { OverlayStyled } from "./OverlayStyled";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../../redux/navbar/navbarSlice";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";

const Overlay = () => {
	const openNavbar = useSelector((state) => state.navbar.open);
	const openCart = useSelector((state) => state.cart.open);
	const dispatch = useDispatch();
	return (
		<>
			{openNavbar && (
				<OverlayStyled
					open={openNavbar}
					onClick={() => dispatch(toggleNavbar())}
				/>
			)}
			{openCart && (
				<OverlayStyled
					open={openCart}
					onClick={() => dispatch(toggleHiddenCart())}
				/>
			)}
		</>
	);
};

export default Overlay;
