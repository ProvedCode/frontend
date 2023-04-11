import React, { createContext, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext({
	auth: false,
	setAuth: () => {},
});

export function UserProvider({ children }) {
	const [auth, setAuth] = useState(true);
	const [token, setToken] = useState("");
	const [cookies] = useCookies(["token"]);

	// useEffect(() => {
	// 	if (cookies.token) {
	// 		setToken(cookies.token);
	// 		setAuth(true);
	// 	} else {
	// 		setAuth(false);
	// 	}
	// }, [cookies.token]);

	const userValue = useMemo(
		() => ({
			auth,
			setAuth,
			token,
			setToken,
		}),
		[auth, token]
	);

	return (
		<UserContext.Provider value={userValue}>{children}</UserContext.Provider>
	);
}
