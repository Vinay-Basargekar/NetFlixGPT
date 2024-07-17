import { create } from "zustand";

const useGptStore = create((set) => ({
	movieResults: null,
	movieNames: null,
	toggleGpt: false,
	setToggle: () => set((state) => ({ toggleGpt: !state.toggleGpt })),
	addGptMovieResult: (movieNames, movieResults) =>
		set({
			movieNames,
			movieResults,
		}),
}));

export default useGptStore;
