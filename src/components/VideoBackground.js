import React from "react";
import useMoviesStore from "../utils/useMoviesStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailerURL = useMoviesStore((state) => state.trailerUrl);

	useMovieTrailer({ movieId });

	return (
		<div className="relative w-screen h-screen overflow-x-clip">
			<iframe
				className="absolute -z-10 top-0 left-0 w-screen h-full"
				style={{ transform: "scale(1.5)", transformOrigin: "center" }}
				src={trailerURL}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackground;
