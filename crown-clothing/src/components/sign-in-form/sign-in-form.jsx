import "./sign-in-form.scss";
import { useState } from "react";
import { logGoogleUsersWithPopUp, signInUsingEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
	email: "",
	password: "",
};
export default function SignInForm({ className }) {
	const { setCurrenntUser } = useContext(UserContext);

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await signInUsingEmailAndPassword(email, password);
		const userAuth = response.user;
		// console.log(userAuth);
		if (response) {
			setCurrenntUser(userAuth);
			resetFormFields();
		}
	};

	const handleGoogleSignIn = async () => {
		const userAuth = await logGoogleUsersWithPopUp();
		setCurrenntUser(userAuth);
	};

	return (
		<div className={className}>
			<form action="" method="POST" className="" onSubmit={handleSubmit}>
				<h1> Sign-In </h1>
				<FormInput label="Email" name="email" onChange={handleChange} type="email" value={email} />
				<FormInput label="Password" name="password" onChange={handleChange} type="password" value={password} />
				<button className="btn btn-outline-dark w-100 rounded-0 mb-2" type="submit">
					Sign-In
				</button>
			</form>
			<button className="btn btn-outline-primary w-100 rounded-0" onClick={handleGoogleSignIn}>
				Google Sign In
			</button>
		</div>
	);
}
