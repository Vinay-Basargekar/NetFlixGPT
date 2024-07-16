import { create } from "zustand";

const useMoviesStore = create((set) => ({
	movies: [],
	trailerUrl: "",
	setMovies: (movies) => set({ movies }),
	setTrailerUrl: (url) => set({ trailerUrl: url }),
}));

export default useMoviesStore;
