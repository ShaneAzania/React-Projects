import "./checkout-item.scss";

import { useContext, Fragment } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ onClick, children, item }) => {
	const { id, imageUrl, name, quantity, price } = item,
		{ subtractItemFromCart, addItemToCart, deleteFromCart } = useContext(CartContext);
	return (
		<Fragment>
			<tr className="checkout-item-container" key={id}>
				<td>
					<img src={imageUrl} alt={name} />
					{name}
				</td>
				<td className="">
					<span className="increase-decrease-cartItem" onClick={() => subtractItemFromCart(item)}>
						{"< "}
					</span>
					<span className="cart-item-quantity">{quantity}</span>
					<span className="increase-decrease-cartItem" onClick={() => addItemToCart(item)}>
						{" >"}
					</span>
				</td>
				<td className="">{price}</td>
				<td className="">
					<span className="removeCartItem" onClick={() => deleteFromCart(item)}>
						Remove
					</span>
				</td>
			</tr>
		</Fragment>
	);
};

export default CheckoutItem;
