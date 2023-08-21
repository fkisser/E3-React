import { products } from "../../data/products";
import Categories from "./Categories";
import Product from "./Product";
import {
	ProductsContainerStyled,
	ProductsSectionStyled,
} from "./ProductsStyles";
import { CategoriesWrapperStyled } from "./CategoriesStyles";

const Products = ({ starred, orderedBy = "price", order = "desc" }) => {
	products?.sort((a, b) => b.price - a.price);
	{
		return starred ? (
			<ProductsSectionStyled>
				<h2>Productos destacados</h2>
				<ProductsContainerStyled>
					{products?.map((product) => {
						return (
							product.starred && (
								<Product
									key={product.id}
									{...product}
								/>
							)
						);
					})}
				</ProductsContainerStyled>
			</ProductsSectionStyled>
		) : (
			<ProductsSectionStyled>
				<h2>Productos</h2>
				<CategoriesWrapperStyled>
					<h3>Categorías</h3>
					<Categories />
				</CategoriesWrapperStyled>
				<ProductsContainerStyled>
					{products?.map((product) => {
						return (
							<Product
								key={product.id}
								{...product}
							/>
						);
					})}
				</ProductsContainerStyled>
			</ProductsSectionStyled>
		);
	}
};

export default Products;
