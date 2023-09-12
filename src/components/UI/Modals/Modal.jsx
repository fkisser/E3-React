import React from "react";
import { ConfirmStyled, InfoStyled } from "./ModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setIsConfirm, toggleModal } from "../../../redux/modal/modalSlice";
import Button from "../Button/Button";

const Modal = () => {
	const { open, message } = useSelector((state) => state.modal);

	return <InfoStyled open={open}> {message} </InfoStyled>;
};

export default Modal;
