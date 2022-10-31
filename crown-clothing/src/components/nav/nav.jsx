import "./nav.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

function Nav() {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/">
						Home
					</Link>
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					<Link className="nav-link" to="/sign-in">
						Sign-In
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Nav;
