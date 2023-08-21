import React from "react";
import { FormContainerStyled } from "./ContactStyles";

const FormContainer = ({ children }) => {
	return <FormContainerStyled>{children}</FormContainerStyled>;
};

export default FormContainer;
