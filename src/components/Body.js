import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";

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
		{
			path:"/error",
			element:<ErrorPage/>,
		},
	]);

	

	return <RouterProvider router={BrowseRouter} />;
};

export default Body;
