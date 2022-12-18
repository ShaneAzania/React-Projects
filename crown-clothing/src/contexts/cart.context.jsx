import { createContext, useState /*, useEffect*/ } from "react";
import {} from "../utils/firebase/firebase.utils";

// the actual value you want to access
export const CartContext = createContext({
	isCartOpen: false,
	set_isCartOpen: () => null,
	cartItems: null,
	addItemToCart: () => null,
	subtractItemFromCart: () => null,
	deleteFromCart: () => null,
});

// provider is the actual component that gets wrapped around other components to give them acces to the context
export const CartProvider = ({ children }) => {
	const [isCartOpen, set_isCartOpen] = useState(true);
	const [cartItems, set_cartItems] = useState([]);
	// cart item structure
	/*
		{
			id: 1,
			name: "Brown Brim",
			imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
			price: 25,
			quantity: 10,
		}
	*/

	const addItemToCart = (itemToAdd) => {
		// If item is already in 'cartItems', increase the quantity value, else add 'itemToAdd'.
		var updatedCartItemsArray = [];
		// check if itemToAdd has a valid id in the cartItems[] already
		const itemToAddPresent = cartItems.find((item) => item.id === itemToAdd.id);

		// if item is already present, increase it's quantity by 1
		if (itemToAddPresent) {
			updatedCartItemsArray = cartItems.map((item) =>
				item.id === itemToAdd.id
					? //if itemToAdd matches current item in cart, increase the existing item quantity by 1
					  { ...item, quantity: item.quantity + 1 }
					: //if current item does not match, just add current item to the new cart array
					  item
			);
		} // if item is NOT already present, add quantity value to item, then add item to updatedCartItemsArray
		else {
			updatedCartItemsArray = [...cartItems, { ...itemToAdd, quantity: 1 }];
		}

		set_cartItems(updatedCartItemsArray);
	};

	const subtractItemFromCart = (itemToSubtract) => {
		var updatedCartItemsArray = [];

		// check if item is in cartItems
		const itemToSubtractPresent = cartItems.find((item) => item.id === itemToSubtract.id);

		// if item present, decrease quantity, else don't do anything
		if (itemToSubtractPresent) {
			updatedCartItemsArray = cartItems.map((item) => {
				if (item.id === itemToSubtractPresent.id) {
					// check quantity
					return { ...item, quantity: item.quantity - 1 };
				} else {
					return item;
				}
			});
			// check if quantity reaches 0, don't add to updated cart array)
			updatedCartItemsArray = updatedCartItemsArray.filter((item) => item.quantity > 0);

			set_cartItems(updatedCartItemsArray);
		}
	};
	const deleteFromCart = (itemToDelete) => {
		const updatedCartItemsArray = cartItems.filter((item) => item.id !== itemToDelete.id);
		set_cartItems(updatedCartItemsArray);
	};

	const value = { isCartOpen, set_isCartOpen, cartItems, addItemToCart, subtractItemFromCart, deleteFromCart };

	// useEffect(() => {
	// 	// const unsubscribe = onAuthStateChangedListener(async (products) => {
	// 	// });
	// 	// return unsubscribe;
	// }, []);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
