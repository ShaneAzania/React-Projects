import "./nav.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import { signOutUser /*, getUserDisplayNameFromeFireStore */ } from "../../utils/firebase/firebase.utils";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

function Nav({ links }) {
	const { currenntUser } = useContext(UserContext);
	const { isCartOpen, set_isCartOpen } = useContext(CartContext);

	// var userWithDisplayName;

	const getUsersDisplayName = async () => {
		if (!currenntUser) {
		} //else userWithDisplayName = await getUserDisplayNameFromeFireStore(currenntUser);
	};
	getUsersDisplayName();

	// console.log("nav: userWithDisplayName:", userWithDisplayName);

	let userDisplayName = "";

	try {
		userDisplayName = !currenntUser.displayName ? currenntUser.email : currenntUser.displayName;
	} catch (error) {}

	const handleSignOutClick = async (e) => {
		await signOutUser();
	};
	const handleCartIconClick = (e) => {
		isCartOpen === false ? set_isCartOpen(true) : set_isCartOpen(false);
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
					<Link key="userDisplayName" className="nav-link" to="#">
						{userDisplayName}
					</Link>
					<CartIcon onClick={handleCartIconClick} />
					{isCartOpen ? <CartDropdown /> : null}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Nav;
