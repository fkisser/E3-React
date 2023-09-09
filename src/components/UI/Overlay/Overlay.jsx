import React from "react";
import { OverlayStyled } from "./OverlayStyled";
import { useMenuContext } from "../../../context/MenuContext";

const Overlay = () => {
	const { open, handleClick } = useMenuContext();
	return (
		<OverlayStyled
			open={open}
			onClick={open && handleClick}
		/>
	);
};

export default Overlay;
