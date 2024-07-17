import React from "react";
import MovieList from "./MovieList";
import useGptStore from "../utils/useGptStore";

const GptMovieSuggestions = () => {
	const { movieResults, movieNames } = useGptStore((state) => ({
		movieResults: state.movieResults,
		movieNames: state.movieNames,
	}));

    console.log(movieNames);
    
	if (!movieNames) return null;

	return (
		<div className="p-4 m-4 font-bold bg-black text-white bg-opacity-90">
			<div>
				{movieNames.map((movieName, index) => (
					<MovieList
						key={movieName}
						title={movieName}
						movies={movieResults[index]}
					/>
				))}
			</div>
		</div>
	);
};

export default GptMovieSuggestions;
