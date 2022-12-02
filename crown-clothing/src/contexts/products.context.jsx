import { createContext, useState /*, useEffect*/ } from "react";
import {} from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../data/shop-data.json";

// the actual value you want to access
export const ProductsContext = createContext({
	products: [],
	setProducts: () => null,
});

// provider is the actual component that gets wrapped around other components to give them acces to the context
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(SHOP_DATA);
	const value = { products, setProducts };

	// useEffect(() => {
	// 	// const unsubscribe = onAuthStateChangedListener(async (products) => {
	// 	// });
	// 	// return unsubscribe;
	// }, []);

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
