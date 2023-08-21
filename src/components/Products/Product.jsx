import { FaCartPlus } from "react-icons/fa6";
import Button from "../UI/Button/Button";
import { ProductCardStyled } from "./ProductsStyles";

const Product = ({ title, description, /*category,*/ price, url }) => {
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
					<Button radius="50%">
						<FaCartPlus />
					</Button>
				</div>
			</div>
		</ProductCardStyled>
	);
};

export default Product;
