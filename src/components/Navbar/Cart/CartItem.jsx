import React from "react";
import { CartItemStyled } from "./CartStyles";
import Button from "../../UI/Button/Button";
import { addItem, removeItem } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { BiSolidTrash } from "react-icons/bi";
import { setMessage, toggleModal } from "../../../redux/modal/modalSlice";

const CartItem = ({ url, title, price, quantity, id }) => {
	const dispatch = useDispatch();
	return (
		<CartItemStyled>
			<div className="item-content">
				<div className="item-img">
					<img
						src={url}
						alt={title}
					/>
				</div>
				<div className="item-text">
					<h3 className="item-title">{title}</h3>
					<span className="item-price">${price.toFixed(2)}</span>
				</div>
			</div>
			<div className="quantityHandler">
				<Button
					className="quantityBtn"
					onClick={() => {
						dispatch(removeItem(id));
						quantity === 1
							? dispatch(setMessage("Se eliminó el producto del carrito"))
							: dispatch(setMessage("Se eliminó una unidad del producto"));
						dispatch(toggleModal());
					}}>
					{quantity === 1 ? <BiSolidTrash /> : <FaMinus />}
				</Button>
				<span>{quantity}</span>
				<Button
					className="quantityBtn"
					onClick={() => {
						dispatch(addItem({ url, title, price, quantity, id }));
						dispatch(setMessage("Se agregó una unidad al producto"));
						dispatch(toggleModal());
					}}>
					<FaPlus />
				</Button>
			</div>
		</CartItemStyled>
	);
};

export default CartItem;
