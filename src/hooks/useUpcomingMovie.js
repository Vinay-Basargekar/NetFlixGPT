import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMoviesStore from "../utils/useMoviesStore";

const useUpcomingMovie = () => {
	const setUpcomingMovie = useMoviesStore((state) => state.setUpcomingMovie);

	//fetch data from tmdp API and updating my zustand store
	useEffect(() => {
		const getNowMovies = async () => {
			const data = await fetch(
				"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
				API_OPTIONS
			);
			const json = await data.json();
			setUpcomingMovie(json.results);
		};
		getNowMovies();
	}, [setUpcomingMovie]);

};

export default useUpcomingMovie;
