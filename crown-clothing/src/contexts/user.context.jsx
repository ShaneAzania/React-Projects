import { createContext, useState } from "react";

// the actual value you want to access
export const UserContext = createContext({
	currenntUser: null,
	setCurrenntUser: () => null,
});

// provider is the actual component that gets wrapped around other components to give them acces to the context
export const UserProvider = ({ children }) => {
	const [currenntUser, setCurrenntUser] = useState(null);
	const value = { currenntUser, setCurrenntUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
