import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, getUserDisplayNameFromeFireStore } from "../utils/firebase/firebase.utils";

// the actual value you want to access
export const UserContext = createContext({
	currenntUser: null,
	setCurrenntUser: () => null,
});

// provider is the actual component that gets wrapped around other components to give them acces to the context
export const UserProvider = ({ children }) => {
	const [currenntUser, setCurrenntUser] = useState(null);
	const value = { currenntUser, setCurrenntUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			console.log("userContext: onAuthStateChangedListener: user:", user);

			if (user) {
				const userAuthWithdisplayName = await getUserDisplayNameFromeFireStore(user);
				console.log(
					"userContext: onAuthStateChangedListener: userAuthWithdisplayName:",
					userAuthWithdisplayName
				);
				setCurrenntUser(userAuthWithdisplayName);
			}
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
