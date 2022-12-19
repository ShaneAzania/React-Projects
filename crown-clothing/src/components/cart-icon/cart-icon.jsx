import "./cart-icon.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ onClick, children }) => {
	const { cartCount } = useContext(CartContext);

	return (
		<div className="cart-icon-container" onClick={onClick}>
			<ShoppingCartIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
