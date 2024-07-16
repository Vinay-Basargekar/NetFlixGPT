import React from "react";
import useMoviesStore from "../utils/useMoviesStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
	const movies = useMoviesStore((state) => state.movies);

	if (!movies || movies.length === 0) {
		return <div>Loading...</div>; // Loading state
	}

	const mainMovie = movies[0];
	const { id, original_title, overview } = mainMovie;

	return (
		<div className="relative w-screen h-screen ">
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
}

export default MainContainer;
