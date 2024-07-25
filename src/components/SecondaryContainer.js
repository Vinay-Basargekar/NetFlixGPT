import React from "react";
import MovieList from "./MovieList";
import useMoviesStore from "../utils/useMoviesStore";

function SecondaryContainer() {

	const movies = useMoviesStore((state) => state.movies);
	const upcomingMovies = useMoviesStore((state) => state.upcomingMovie);
	const popularMovie = useMoviesStore((state) => state.popularMovie);
	// console.log(movies);
	// console.log(upcomingMovies);
	// console.log(popularMovie);

	return (
		<div>
			<div className=" bg-black md:bg-transparent md:-mt-24 md:pl-12 relative z-50 w-screen font-bold md:bg-gradient-to-t from-black">
				<MovieList title={"Now playing"} movies={movies} />
			</div>
			<div className="-mt-2 md:pl-12 relative z-20 w-screen bg-black font-bold">
				<MovieList title={"Upcoming"} movies={upcomingMovies} />
				<MovieList title={"Must watch"} movies={popularMovie} />
			</div>
		</div>
	);
}

export default SecondaryContainer;
