import "./sign-up-form.scss";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

export default function SignUpForm() {
	const [formFields, setFormFields] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { displayName, email, password, confirmPassword } = formFields;

	// console.log(formFields);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		var valid = true;

		if (displayName.length < 5) {
			valid = false;
			alert("Display name must be at least 5 charcters long");
		}

		if (password !== confirmPassword) {
			valid = false;
			alert("Passwords do not match");
		}
		if (password.length < 8) {
			valid = false;
			alert("Password must be at least 8 characters long");
		}

		if (email.length < 6) {
			valid = false;
			alert("Pnvalid email");
		}

		if (!valid) {
			return;
		}

		// create user
		await createAuthUserWithEmailAndPassword(email, password, displayName);
	};

	return (
		<form action="" method="POST" className="col-12 col-md-4" onSubmit={handleSubmit}>
			<h1> Sign-Up </h1>
			<div className="mb-3">
				<label htmlFor="displayName" className="form-label">
					Display Name
				</label>
				<input type="text" className="form-control" name="displayName" required placeholder="" onChange={handleChange} value={displayName} />
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input type="email" className="form-control" name="email" required placeholder="abc@mail.com" onChange={handleChange} value={email} />
			</div>
			<div className="mb-3">
				<label htmlFor="password" className="form-label">
					Password
				</label>
				<input type="password" className="form-control" name="password" required placeholder="" onChange={handleChange} value={password} />
			</div>
			<div className="mb-3">
				<label htmlFor="password" className="form-label">
					Re-enter Password
				</label>
				<input
					type="password"
					className="form-control"
					name="confirmPassword"
					required
					placeholder=""
					onChange={handleChange}
					value={confirmPassword}
				/>
			</div>
			<div className="d-grid gap-2">
				<button className="btn btn-block btn-outline-warning radius-0" type="submit">
					Sign Up
				</button>
			</div>
		</form>
	);
}
