// import logo from './logo.svg';
import "./home.scss";
import categories from "../../data/categories.json";
import Directory from "../../components/directory/directory";

function Home() {
	return (
		<div className="App">
			<Directory categories={categories} />
		</div>
	);
}

export default Home;
