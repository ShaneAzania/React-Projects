import "./App.scss";
import Nav from "./components/nav/nav";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import { Routes, Route } from "react-router-dom";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Nav />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);
}

export default App;
