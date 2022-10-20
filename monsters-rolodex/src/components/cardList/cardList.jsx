import "./cardList.css";
import { Component } from "react";

import Card from "../card/card";

class CardList extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const { searchResults } = this.props;
		return (
			<div className="card-list">
				{searchResults.map((monster) => {
					// const { id, name, email } = monster;
					return <Card monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
