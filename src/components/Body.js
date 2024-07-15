import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import useUserStore from "../utils/useUserStore";
import ErrorPage from "./ErrorPage";

const Body = () => {
	const setUser = useUserStore((state) => state.setUser);
	const clearUser = useUserStore((state) => state.clearUser);

	const BrowseRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/Browse",
			element: <Browse />,
		},
		{
			path:"/error",
			element:<ErrorPage/>,
		},
	]);

	useEffect(() => {
		//code from firebase to Get the currently signed-in user
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				setUser({ uid, email, displayName });
			} else {
				clearUser();
			}
		});

		// Clean up the subscription on unmount
		return () => unsubscribe();
	}, [setUser, clearUser]);

	return <RouterProvider router={BrowseRouter} />;
};

export default Body;
