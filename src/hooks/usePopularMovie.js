import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMoviesStore from "../utils/useMoviesStore";

const usePopularMovie = () => {
	const setPopularMovie = useMoviesStore((state) => state.setPopularMovie);

	//fetch data from tmdp API and updating my zustand store
	useEffect(() => {
		const getNowMovies = async () => {
			const data = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
				API_OPTIONS
			);
			const json = await data.json();
			setPopularMovie(json.results);
		};
		getNowMovies();
	}, [setPopularMovie]);
};

export default usePopularMovie;
