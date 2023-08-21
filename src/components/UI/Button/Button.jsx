import { StyledButton } from "./ButtonStyles";

const Button = ({ children, disabled = false, radius = ".5rem" }) => {
	return (
		<StyledButton
			whileTap={{ scale: 0.95 }}
			disabled={disabled}
			radius={radius}>
			{children}
		</StyledButton>
	);
};

export default Button;
