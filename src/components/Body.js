import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import WatchMovie from "./WatchMovie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import WatchMovieComponent from "./WatchMovieComponent";

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
			path: "/playMovie/",
			element: <WatchMovie />,
		},
		{
			path: "/playMovie/:id",
			element: <WatchMovieComponent />,
		},
		{
			path:"/error",
			element:<ErrorPage/>,
		},
	]);

	

	return <RouterProvider router={BrowseRouter} />;
};

export default Body;
