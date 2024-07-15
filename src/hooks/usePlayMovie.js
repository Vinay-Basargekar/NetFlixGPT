import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMoviesStore from "../utils/useMoviesStore";

const usePlayMovie = () => {
	const setMovies = useMoviesStore((state) => state.setMovies);

	//fetch data from tmdp API and updating my zustand store
	useEffect(() => {
		const getNowMovies = async () => {
			const data = await fetch(
				"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
				API_OPTIONS
			);
			const json = await data.json();
			setMovies(json.results);
		};
		getNowMovies();
	}, [setMovies]);

};

export default usePlayMovie;
