import React from "react";
import { CategoriesContainerStyled } from "./CategoriesStyles";
import { categories } from "../../data/categories";
import Category from "./Category";

const Categories = () => {
	return (
		<CategoriesContainerStyled>
			{categories
				?.sort((a, b) => a.title - b.title)
				.map((category) => {
					return (
						<Category
							key={category.id}
							{...category}
						/>
					);
				})}
		</CategoriesContainerStyled>
	);
};

export default Categories;
