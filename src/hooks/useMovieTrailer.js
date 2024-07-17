import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMoviesStore from "../utils/useMoviesStore";

const useMovieTrailer = ({ movieId }) => {
	// const [trailerUrl, setTrailerUrl] = useState("");
	const setTrailerUrl = useMoviesStore((state) => state.setTrailerUrl);

	//fetch trailer video && updating the zustand store in trailerUrl
	useEffect(() => {
		const movieVideo = async (movieId) => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
				API_OPTIONS
			);
			const json = await response.json();

			const trailer =
				json.results.find((video) => video.name.includes("Official Trailer")) ||
				json.results[0];
			setTrailerUrl(
				`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}`
			);
		};

		if (movieId) {
			movieVideo(movieId);
		}
	}, [movieId, setTrailerUrl]);
};

export default useMovieTrailer;
