const CategoryItem = ({ id, title, imageUrl }) => {
	return (
		<div key={id} className="category-container">
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className="category-body-container">
				<h2>{title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
