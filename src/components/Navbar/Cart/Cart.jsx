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
import {
	setIsConfirm,
	setMessage,
	toggleModal,
} from "../../../redux/modal/modalSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const { cartItems, open } = useSelector((state) => state.cart);
	const totalPrice = cartItems?.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);
	return (
		<CartStyled open={open}>
			<div className="cartHeader">
				<Button
					className="backButton"
					onClick={() => {
						dispatch(toggleHiddenCart());
					}}>
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
				<span>${totalPrice.toFixed(2)}</span>
			</TotalContainerStyled>
			<BtnsContainerStyled>
				<Button
					className="clear-btn"
					onClick={() => {
						dispatch(clearCart());
						dispatch(setMessage("Se ha vaciado el carrito"));
						dispatch(toggleModal());
					}}
					disabled={!cartItems.length}>
					<BiSolidTrash />
				</Button>
				<Button
					whileTap={{ scale: 0.95 }}
					onClick={() => {
						dispatch(clearCart());
						dispatch(setMessage("Gracias por tu compra"));
						dispatch(toggleModal());
					}}
					disabled={!cartItems.length}>
					Comprar
				</Button>
			</BtnsContainerStyled>
		</CartStyled>
	);
};

export default Cart;
