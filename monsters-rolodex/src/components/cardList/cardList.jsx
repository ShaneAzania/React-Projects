import "./cardList.css";

import Card from "../card/card";

const CardList = ({ searchResults }) => (
	<div className="card-list">
		{searchResults.map((monster) => {
			// const { id, name, email } = monster;
			return <Card monster={monster} key={monster.id} />;
		})}
	</div>
);
export default CardList;
