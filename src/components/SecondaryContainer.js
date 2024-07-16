import React from "react";
import MovieList from "./MovieList";
import useMoviesStore from "../utils/useMoviesStore";

function SecondaryContainer() {

	const movies = useMoviesStore((state) => state.movies);

	return (
		<div>
			<div className="-mt-44 pl-12 relative z-50 w-screen">
				<MovieList title={"Now playing"} movies={movies} />
			</div>
			<div className="-mt-2 pl-12 relative z-20 w-screen bg-black ">
				<MovieList title={"Trending"} movies={movies} />
				<MovieList title={"Must watch"} movies={movies} />
			</div>
		</div>
	);
}

export default SecondaryContainer;
