import "./searchInput.css";
import { Component } from "react";

class SearchInput extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const { className, onSearchChange, placeholder } = this.props;
		return <input className={className} type="search" placeholder={placeholder} onChange={onSearchChange} />;
	}
}

export default SearchInput;
