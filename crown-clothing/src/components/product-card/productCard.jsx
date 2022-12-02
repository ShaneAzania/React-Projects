import "./productCard.scss";

function ProductCard({ product }) {
	const { imageUrl, name, price } = product;
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<button className="btn btn-outline-light rounded-0 text-center ">Add to card</button>
		</div>
	);
}

export default ProductCard;
