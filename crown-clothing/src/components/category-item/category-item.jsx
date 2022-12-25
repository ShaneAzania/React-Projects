import { Link, useNavigate } from "react-router-dom";

const CategoryItem = ({ id, title, imageUrl }) => {
	const navigate = useNavigate(),
		handleCategoryClick = () => {
			navigate("/shop/" + title.toLowerCase());
		};
	return (
		<div key={id} className="category-container">
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className="category-body-container" onClick={handleCategoryClick}>
				<h2>{title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
