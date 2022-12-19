import "./cart-item.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ onClick, children, cartItem }) => {
	const { id, name, imageUrl, price, quantity } = cartItem,
		{ addItemToCart, subtractItemFromCart, deleteFromCart } = useContext(CartContext);
	return (
		<div id={"cart-item-" + id} className="cart-item-container" onClick={onClick}>
			<div className="cart-item-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className="cart-items-details">
				<span className="cart-item-name">{name}</span>
				<div className="cart-item-quantity-and-price-container">
					<span className="cart-item-quantity">{quantity} x </span>
					<span className="cart-item-price">${price}</span>
				</div>
				<div className="changeQuantity">
					<span className="decreaseCartItem" onClick={() => subtractItemFromCart(cartItem)}>
						{" "}
						{"<"}{" "}
					</span>{" "}
					<span className="increaseCartItem" onClick={() => addItemToCart(cartItem)}>
						{" "}
						{">"}{" "}
					</span>
				</div>
				<span className="deleteCartItem" onClick={() => deleteFromCart(cartItem)}>
					Delete
				</span>
			</div>
		</div>
	);
};

export default CartItem;
