import "./nav.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

function Nav({ links }) {
	const { currenntUser } = useContext(UserContext);

	let userName = "";

	try {
		userName = currenntUser.displayName;
		console.log("Nav:", "user name:", currenntUser.displayName);
	} catch (error) {
		console.log("Nav:", "No user logged in at the moment.");
	}

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					{links.map(({ text, to }) => (
						<Link key={to} className="nav-link" to={to}>
							{text}
						</Link>
					))}
					<Link key="userName" className="nav-link" to="#">
						{userName}
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Nav;
