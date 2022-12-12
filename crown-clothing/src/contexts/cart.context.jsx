import { createContext, useState /*, useEffect*/ } from "react";
import {} from "../utils/firebase/firebase.utils";

// the actual value you want to access
export const CartContext = createContext({
	isCartOpen: false,
	set_isCartOpen: () => null,
});

// provider is the actual component that gets wrapped around other components to give them acces to the context
export const CartProvider = ({ children }) => {
	const [isCartOpen, set_isCartOpen] = useState(false);
	const value = { isCartOpen, set_isCartOpen };

	// useEffect(() => {
	// 	// const unsubscribe = onAuthStateChangedListener(async (products) => {
	// 	// });
	// 	// return unsubscribe;
	// }, []);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
