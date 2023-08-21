import React from "react";
import ContactImage from "./img/contact.jpg";
import ImgContainer from "./ImgContainer";
import FormContainer from "./FormContainer";
import { ContactContainerStyled, ContactContentStyled } from "./ContactStyles";
import Button from "../UI/Button/Button";

const Contact = () => {
	return (
		<ContactContainerStyled>
			<h2>Contactanos</h2>
			<ContactContentStyled>
				<ImgContainer>
					<img
						src={ContactImage}
						alt="nosotros"
					/>
				</ImgContainer>
				<FormContainer>
					<form>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Tu nombre"
						/>

						<input
							type="text"
							name="lname"
							id="lname"
							placeholder="Tu apellido"
						/>

						<input
							type="email"
							name="email"
							id="email"
							placeholder="Tu mail"
						/>

						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Asunto"
						/>

						<textarea
							name="message"
							id="message"
							cols="30"
							rows="7"
							placeholder="Tu mensaje"></textarea>

						<Button onClick={""}>Enviar</Button>
					</form>
				</FormContainer>
			</ContactContentStyled>
		</ContactContainerStyled>
	);
};

export default Contact;
