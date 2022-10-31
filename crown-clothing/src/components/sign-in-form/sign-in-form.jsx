import "./sign-in-form.scss";
import { logGoogleUsersWithPopUp } from "../../utils/firebase/firebase.utils";

export default function SignInForm() {
	return (
		<form action="" method="POST" className="col-12 col-md-4" onSubmit={() => {}}>
			<h1> Sign-In </h1>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input type="email" className="form-control" name="email" required placeholder="abc@mail.com" />
			</div>
			<div className="mb-3">
				<label htmlFor="password" className="form-label">
					Password
				</label>
				<input type="password" className="form-control" name="password" required placeholder="" />
			</div>
			<div className="d-grid gap-2">
				<button className="btn btn-outline-danger" type="submit">
					Sign-In
				</button>
				<button className="btn btn-outline-success" onClick={logGoogleUsersWithPopUp}>
					Google Sign In
				</button>
			</div>
		</form>
	);
}
