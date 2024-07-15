import React from "react";
import useMoviesStore from "../utils/useMoviesStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
	const movies = useMoviesStore((state) => state.movies);

	if (!movies) return;

	const mainMovie = movies[0];
	console.log(mainMovie);

	const { original_title, overview } = mainMovie;

	return (
		<div>
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground />
		</div>
	);
}

export default MainContainer;
