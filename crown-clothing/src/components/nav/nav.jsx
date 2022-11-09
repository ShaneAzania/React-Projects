import "./nav.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

function Nav({ links }) {
	const { currenntUser, setCurrenntUser } = useContext(UserContext);

	let userDisplayNameOrEmail = "";

	try {
		currenntUser.displayName
			? (userDisplayNameOrEmail = currenntUser.displayName)
			: (userDisplayNameOrEmail = currenntUser.email);
	} catch (error) {}

	const handleSignOutClick = async (e) => {
		await signOutUser();
		setCurrenntUser(null);
	};

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					{links.map(({ text, to }) => {
						if (!currenntUser && text !== "Sign-Out") {
							return (
								<Link key={to} className="nav-link" to={to}>
									{text}
								</Link>
							);
						} else if (currenntUser && text !== "Sign-In") {
							if (text === "Sign-Out") {
								return (
									<Link key={to} className="nav-link" to={to} onClick={handleSignOutClick}>
										{text}
									</Link>
								);
							} else {
								return (
									<Link key={to} className="nav-link" to={to}>
										{text}
									</Link>
								);
							}
						} else return null;
					})}
					<Link key="userDisplayNameOrEmail" className="nav-link" to="#">
						{userDisplayNameOrEmail}
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Nav;
