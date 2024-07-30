import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

function MovieList({ title, movies }) {
	const navigate = useNavigate();

	// console.log(movies);
	if (!movies || movies.length === 0) {
		return <div>Loading...</div>; // Loading state
	}

	return (
		<div className="px-6 ">
			<h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
			<div className="flex overflow-x-scroll ">
				<div className="flex" >
					{movies?.map((movie) => (
						<MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
}

export default MovieList;
