import "./sign-in.scss";
import { Fragment } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
	return (
		<Fragment>
			<div className="row px-3 justify-content-center">
				<SignInForm />
				<SignUpForm />
			</div>
		</Fragment>
	);
};

export default SignIn;
