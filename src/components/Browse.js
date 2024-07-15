import React from "react";
import Header from "./Header";
import usePlayMovie from "../hooks/usePlayMovie";
import MainContainer from "./MainContainer";
import useMoviesStore from "../utils/useMoviesStore";

const Browse = () => {
	const movies = useMoviesStore((state) => state.movies);
	console.log(movies);

	usePlayMovie();

	return (
		<div>
			<Header />
			<MainContainer/>
		</div>
	);
};

export default Browse;
