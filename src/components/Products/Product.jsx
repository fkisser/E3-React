import { FaCartPlus } from "react-icons/fa6";
import Button from "../UI/Button/Button";
import { ProductCardStyled } from "./ProductsStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";

const Product = ({ title, description, price, url, id }) => {
	const dispatch = useDispatch();
	return (
		<ProductCardStyled>
			<div className="image">
				<img
					src={url}
					alt={title}
				/>
			</div>
			<div className="text">
				<h4>{title}</h4>
				<p>{description}</p>
				<div>
					<p className="price">${price}</p>
					<Button
						onClick={() => dispatch(addItem({ title, price, url, id }))}
						radius="50%">
						<FaCartPlus />
					</Button>
				</div>
			</div>
		</ProductCardStyled>
	);
};

export default Product;
