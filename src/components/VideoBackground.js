import React from "react";
import useMoviesStore from "../utils/useMoviesStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailerURL = useMoviesStore((state) => state.trailerUrl);

	useMovieTrailer({ movieId });

	return (
		<div className="relative w-screen h-screen">
			<iframe
				className="absolute -z-10 top-0 left-0 w-full h-full"
				style={{ transform: "scale(1.5)", transformOrigin: "center" }}
				src={trailerURL}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				frameBorder="0"
			></iframe>
		</div>
	);
};

export default VideoBackground;
