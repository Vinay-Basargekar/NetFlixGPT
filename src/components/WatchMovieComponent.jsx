import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = ({ movieId, setTrailerUrl, setTrailerError }) => {
	useEffect(() => {
		const fetchMovieTrailer = async (movieId) => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
					API_OPTIONS
				);
				const data = await response.json();

				const trailer =
					data.results.find((video) =>
						video.name.includes("Official Trailer")
					) || data.results[0];

				if (trailer) {
					setTrailerUrl(
						`https://www.youtube.com/embed/${trailer.key}?autoplay=1&loop=1&playlist=${trailer.key}`
					);
					setTrailerError(false);
				} else {
					setTrailerError(true);
				}
			} catch (error) {
				setTrailerError(true);
			}
		};

		if (movieId) {
			fetchMovieTrailer(movieId);
		}
	}, [movieId, setTrailerUrl, setTrailerError]);
};

const WatchMovieComponent = () => {
	const [movie, setMovie] = useState(null);
	const [trailerUrl, setTrailerUrl] = useState("");
	const [trailerError, setTrailerError] = useState(false);
	const { id: movieId } = useParams();

	useMovieTrailer({ movieId, setTrailerUrl, setTrailerError });

	useEffect(() => {
		const fetchMovieDetails = async (movieId) => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
				API_OPTIONS
			);
			const data = await response.json();
			setMovie(data);
		};

		if (movieId) {
			fetchMovieDetails(movieId);
		}
	}, [movieId]);

	return (
		<div className="bg-black text-white min-h-screen">
			{trailerUrl && !trailerError && (
				<iframe
					className="w-full h-[70vh] md:scale-130"
					src={trailerUrl}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
				></iframe>
			)}
			{trailerError && (
				<div className="w-full h-[70vh] flex items-center justify-center">
					<p className="text-xl md:text-2xl lg:text-3xl">
						Trailer not available
					</p>
				</div>
			)}
			{movie && (
				<div className="p-4">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
						{movie.title}
					</h1>
					<p className="mt-4 text-lg md:text-xl lg:text-2xl">
						{movie.overview}
					</p>
				</div>
			)}
		</div>
	);
};

export default WatchMovieComponent;
