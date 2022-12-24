import "./shop.route.scss";

import { Fragment } from "react";

import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/productCard";

// import SHOP_DATA from "../../data/shop-data.json";

function Shop() {
	const { categories } = useContext(CategoriesContext);

	return (
		<Fragment>
			<div className="categories-container container-fluid">
				{categories.map((category) => (
					<div key={category.title} className="row mb-5">
						<h1 className="">{category.title}</h1>
						<div className="products-container">
							{category.items.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
}

export default Shop;
