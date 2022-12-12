import "./cart-icon.scss";

import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ onClick, children }) => {
	return (
		<div className="cart-icon-container" onClick={onClick}>
			<ShoppingCartIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
