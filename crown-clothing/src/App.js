import "./App.scss";
import "bootstrap";
import Nav from "./components/nav/nav";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import SignIn from "./routes/sign-in/sign-in";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Nav />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);
}

export default App;
