import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

const MenuContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	const menuState = {
		open,
		handleClick,
	};

	return (
		<MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>
	);
};

export { MenuContextProvider };
export default MenuContext;
