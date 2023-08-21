import LogoBig from "./img/logo.png";
import LogoMin from "./img/logo-min.png";

const Logo = ({ min }) => {
	return min ? (
		<img
			src={LogoMin}
			alt=""
		/>
	) : (
		<img
			src={LogoBig}
			alt=""
		/>
	);
};

export default Logo;
