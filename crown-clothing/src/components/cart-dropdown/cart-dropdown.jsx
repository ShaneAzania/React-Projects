import "./cart-dropdown.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item}></CartItem>
				))}
			</div>
			<div className="btn btn-dark rounded-0">Checkout</div>
		</div>
	);
};

export default CartDropdown;
