import React from "react";
import { OverlayStyled } from "./OverlayStyled";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../../redux/navbar/navbarSlice";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";

const Overlay = () => {
	const { navbar, cart } = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<>
			{navbar.open && (
				<OverlayStyled
					open={navbar.open}
					onClick={() => dispatch(toggleNavbar())}
				/>
			)}
			{cart.open && (
				<OverlayStyled
					open={cart.open}
					onClick={() => dispatch(toggleHiddenCart())}
				/>
			)}
		</>
	);
};

export default Overlay;
