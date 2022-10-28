import "./directory.scss";
import CategoryItem from "../category-item/category-item";

function Directory({ categories }) {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} {...category} className="category-container" />
			))}
		</div>
	);
}

export default Directory;
