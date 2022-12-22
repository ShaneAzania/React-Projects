import "./shop.route.scss";

import { Fragment } from "react";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/productCard";

// import SHOP_DATA from "../../data/shop-data.json";

function Shop() {
	const { products } = useContext(ProductsContext);

	return (
		<Fragment>
			<h1 className="Shop ps-3">Shop</h1>
			<div className="products-container">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Fragment>
	);
}

export default Shop;
