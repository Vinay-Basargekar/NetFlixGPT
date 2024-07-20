import React, { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import useGptStore from "../utils/useGptStore";

const GptSearch = () => {
	const searchText = useRef(null);
	const storeGptresults = useGptStore((state) => state.addGptMovieResult);

	// search movie in TMDB
	const searchMovieTMDB = async (movie) => {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
			API_OPTIONS
		);
		const data = await response.json();
		return data.results;
	};

	const handleSearch = async () => {
		//make an API call to GPT api
		const gptQuery =
			`Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}.` +
			"Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Inside Out 2, Sholay, Don, Demon Slayer, No Way Home";

		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});

		if (!gptResults.choices) {
			// TODO: Write Error Handling
			return;
		}
		// console.log(gptResults);
		console.log(gptResults.choices?.[0]?.message?.content);
		const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

		// const tryMovies = [
		// 	"Demon slayer",
		// 	"Inside Out 2",
		// 	"Chupke Chupke",
		// 	"Jaane Bhi Do Yaaro",
		// 	"Padosan",
		// ];
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
		// [Promise, Promise, Promise, Promise, Promise]
		const tmdbResults = await Promise.all(promiseArray);
		// console.log(tmdbResults);
		storeGptresults(gptMovies, tmdbResults);
	};

	return (
		<div className="pt-[30%] md:pt-[10%] flex justify-center opacity-[90%]">
			<div className="bg-black p-4 px-4 md:px-24 w-[90%] md:w-[50%] md:rounded-lg shadow-lg">
				<h1 className="text-xl p-2 md:p-0 md:text-3xl font-bold md:mb-6 text-center text-red-600">
					Movie Recommendations
				</h1>
				<form
					className="flex md:flex-row items-center"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						ref={searchText}
						type="text"
						className="flex-grow p-2 md:text-xl md:p-4 bg-gray-800 border border-gray-700 text-white mb-4 md:mb-4 "
						placeholder="What do you want to watch?"
					/>
					<button
						className="p-2 mb-4 md:p-4 md:text-xl bg-red-600 text-white hover:bg-red-700  md:w-auto"
						onClick={handleSearch}
					>
						Search
					</button>
				</form>
			</div>
		</div>
	);
};

export default GptSearch;
