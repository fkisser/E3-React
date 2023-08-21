import { CategoryCardStyled } from "./CategoriesStyles";
//un switch para los iconitos??
const Category = ({ title }) => {
	return (
		<CategoryCardStyled whileHover={{ scale: 1.05 }}>
			<h4>{title}</h4>
		</CategoryCardStyled>
	);
};

export default Category;
