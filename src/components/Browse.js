import React from "react";
import Header from "./Header";
import usePlayMovie from "../hooks/usePlayMovie";
import MainContainer from "./MainContainer";
// import useMoviesStore from "../utils/useMoviesStore";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import useGptStore from "../utils/useGptStore";

const Browse = () => {
	// const movies = useMoviesStore((state) => state.movies);
	// console.log(movies);

	const toggleGpt = useGptStore((state) => state.toggleGpt);

	usePlayMovie();

	return (
		<div>
			<Header />
			{toggleGpt ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
