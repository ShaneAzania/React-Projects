import "./sign-up-form.scss";
import { useState } from "react";

export default function SignUpForm() {
	const [formFields, setFormFields] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<form action="" method="POST" className="col-12 col-md-4" onSubmit={() => {}}>
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
					name="password2"
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
