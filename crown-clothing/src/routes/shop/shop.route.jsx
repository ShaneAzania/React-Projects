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
						<h1 className="text-center pb-3">{category.title}</h1>
						<div className="products-container row">
							{category.items.map((product) => (
								<ProductCard className="col-lg-3" key={product.id} product={product} />
							))}
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
}

export default Shop;
