import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
	const BrowseRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/Browse",
			element: <Browse />,
		},
	]);

	return (
		<div>
			<RouterProvider router={BrowseRouter}/>
		</div>
	);
};

export default Body;
