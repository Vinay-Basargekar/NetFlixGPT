import { create } from "zustand";

const useMoviesStore = create((set) => ({
	movies: [],
	upcomingMovie: [],
	popularMovie: [],
	trailerUrl: "",
	setMovies: (movies) => set({ movies }),
	setUpcomingMovie: (movies) => set({ upcomingMovie: movies }),
	setPopularMovie: (movies) => set({ popularMovie: movies }),
	setTrailerUrl: (url) => set({ trailerUrl: url }),
}));

export default useMoviesStore;
