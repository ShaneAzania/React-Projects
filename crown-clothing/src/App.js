import "./App.scss";
import "bootstrap";
import Nav from "./components/nav/nav";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";
import SignInUp from "./routes/sign-in-up/sign-in-up.route";
import Checkout from "./routes/checkout/checkout.route";
import { Routes, Route } from "react-router-dom";

function App() {
	const navLinks = [
		{
			text: "Home",
			to: "/",
		},
		{
			text: "Shop",
			to: "/shop",
		},
		{
			text: "Sign-In",
			to: "/sign-in-up",
		},
		{
			text: "Sign-Out",
			to: "#",
		},
	];

	return (
		<Routes>
			<Route path="/" element={<Nav links={navLinks} />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="sign-in-up" element={<SignInUp />} />
				<Route path="sign-out" element={<SignInUp />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
}

export default App;
