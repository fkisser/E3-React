import React from "react";
import {
	BtnsContainerStyled,
	CartStyled,
	ProductsContainerStyled,
	TotalContainerStyled,
} from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack, BiSolidTrash } from "react-icons/bi";
import CartItem from "./CartItem";
import Button from "../../UI/Button/Button";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import { AnimatePresence } from "framer-motion";

const Cart = () => {
	const dispatch = useDispatch();
	const { cartItems, open } = useSelector((state) => state.cart);
	const totalPrice = cartItems.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);
	return (
		<AnimatePresence
			initial={{ translateX: 200 }}
			animate={{ translateX: 0 }}
			exit={{ translateX: 200 }}
			transition={{ type: "spring", damping: 27 }}
			key="cart">
			{open && (
				<CartStyled>
					<div className="cartHeader">
						<Button
							className="backButton"
							whileTap={{ scale: 0.95 }}
							onClick={() => dispatch(toggleHiddenCart())}>
							<BiArrowBack />
						</Button>
						<h2>Tu carrito</h2>
					</div>
					<ProductsContainerStyled>
						{cartItems.length ? (
							cartItems.map((item) => {
								return (
									<CartItem
										key={item.id}
										{...item}
									/>
								);
							})
						) : (
							<p className="empty-msg">No hay productos en el carrito</p>
						)}
					</ProductsContainerStyled>
					<TotalContainerStyled>
						<p>Total:</p>
						<span>${totalPrice}</span>
					</TotalContainerStyled>
					<BtnsContainerStyled>
						<Button
							className="clear-btn"
							onClick={() => dispatch(clearCart())}
							disabled={!cartItems.length}>
							<BiSolidTrash />
						</Button>
						<Button
							whileTap={{ scale: 0.95 }}
							onClick={""}
							disabled={!cartItems.length}>
							Comprar
						</Button>
					</BtnsContainerStyled>
				</CartStyled>
			)}
		</AnimatePresence>
	);
};

export default Cart;
