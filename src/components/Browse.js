import React from "react";
import Header from "./Header";
import usePlayMovie from "../hooks/usePlayMovie";
import useMoviesStore from "../utils/useMoviesStore";

const Browse = () => {
	const movies = useMoviesStore((state) => state.movies);
	console.log(movies);
	
	usePlayMovie();

	return (
		<div className="">
			<Header />
			{movies.map((movie) => (
				<li key={movie.id}>{movie.title}</li>
			))}
		</div>
	);
};

export default Browse;
