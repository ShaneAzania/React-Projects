import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import CardList from "./components/cardList/cardList";
import SearchInput from "./components/searchInput/searchInput";

class Component_Name extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchResults: [],
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users, searchResults: users }; //initialize search results with all objects from 'monsters'
				})
			);
	}

	onSearchChange = (event) => {
		let search_string = event.target.value;
		let new_monsters_list = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(search_string.toLowerCase()));
		this.setState(() => {
			return { searchResults: new_monsters_list };
		});
	};

	render() {
		const { searchResults } = this.state;
		const { onSearchChange } = this;
		return (
			<div className="App">
				<SearchInput className="search-box" onSearchChange={onSearchChange} placeholder="Search for monsters" />
				<CardList searchResults={searchResults} />
			</div>
		);
	}
}

export default Component_Name;
