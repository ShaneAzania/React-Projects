import "./cardList.css";
import { Component } from "react";

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
					const { id, name, email } = monster;
					return (
						<div className="card-container" key={id}>
							<img alt={`monster {monster.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
