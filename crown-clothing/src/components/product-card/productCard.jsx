import "./productCard.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function ProductCard({ product }) {
	const { imageUrl, name, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addToCartHandler = (e) => {
		addItemToCart(product);
	};

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<button className="btn btn-outline-light rounded-0 text-center " onClick={addToCartHandler}>
				Add to card
			</button>
		</div>
	);
}

export default ProductCard;
