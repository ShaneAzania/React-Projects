import "./App.css";
import { useState, useEffect } from "react";

import CardList from "./components/cardList/cardList";
import SearchInput from "./components/searchInput/searchInput";

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchResults, setSearchResults] = useState(monsters);
	const [searchString, setSearchString] = useState("");

	console.log("render");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				setMonsters(users);
			});
		console.log("fetching monsters");
	}, []);
	useEffect(() => {
		// set search results to filter monsters that contain searchString
		let filteredMonstersList = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString.toLowerCase()));
		setSearchResults(filteredMonstersList);
		console.log("filtering: " + searchString);
	}, [searchString, monsters]);

	const onSearchChange = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<div className="App">
			<SearchInput className="search-box" onSearchChange={onSearchChange} placeholder="Search for monsters" />
			<CardList searchResults={searchResults} />
		</div>
	);
};

export default App;
