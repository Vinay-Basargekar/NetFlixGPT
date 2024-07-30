import React from "react";
import useMoviesStore from "../utils/useMoviesStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailerURL = useMoviesStore((state) => state.trailerUrl);

	useMovieTrailer({ movieId });

	return (
		<div className="relative w-screen h-72 md:h-screen overflow-x-clip">
			<iframe
				className="absolute -z-10 top-2 md:top-0 left-0 w-full h-full md:transform md:scale-150 md:transform-origin-center"
				src={trailerURL}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
			></iframe>
		</div>
	);
};

export default VideoBackground;
