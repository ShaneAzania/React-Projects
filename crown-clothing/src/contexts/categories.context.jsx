import { createContext, useEffect, useState } from "react";
import {} from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../data/shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// the actual value you want to access
export const CategoriesContext = createContext({
	categories: null,
	set_categories: () => null,
	products: [],
	setProducts: () => null,
});

// provider is the actual component that gets wrapped around other components to give them acces to the context
export const CategoriesProvider = ({ children }) => {
	const [categories, set_categories] = useState(SHOP_DATA);
	const value = { categories, set_categories };

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments("categories");
			console.log(categoriesMap);
		};
		getCategoriesMap();
	}, []);

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
