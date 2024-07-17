import React, { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import useGptStore from "../utils/useGptStore";

const GptSearch = () => {
	const searchText = useRef(null);
	const storeGptresults = useGptStore((state) => state.addGptMovieResult);

	// search movie in TMDB
	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			API_OPTIONS
		);
		const json = await data.json();

		return json.results;
	};

	const handleSearch = async () => {
		//make an API call to GPT api
		// console.log(searchText.current.value);

		// const gptQuery =
		// 	"Act as a Movie Recommendation system and suggest some movies for the query : " +
		// 	searchText.current.value +
		// 	". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Inside Out 2, Sholay, Don, Demon Slayer, No Way Home";

		// const gptResults = await openai.chat.completions.create({
		// 	messages: [{ role: "user", content: gptQuery }],
		// 	model: "gpt-3.5-turbo",
		// });

		// if (!gptResults.choices) {
		// 	// TODO: Write Error Handling
		// }
		// console.log(gptResults.choices?.[0]?.message?.content);

		// Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
		// const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

		const tryMovies = [
			"Demon slayer",
			"Inside Out 2",
			"Chupke Chupke",
			"Jaane Bhi Do Yaaro",
			"Padosan",
		];
		const promiseArray = tryMovies.map((movie) => searchMovieTMDB(movie));
		// [Promise, Promise, Promise, Promise, Promise]
		const tmdbResults = await Promise.all(promiseArray);
		console.log(tmdbResults);
		storeGptresults(tryMovies, tmdbResults);
	};

	return (
		<div className="pt-[35%] md:pt-[10%] flex justify-center opacity-[90%]">
			<div className="bg-black p-6 px-24 w-[50%] rounded-lg shadow-lg">
				<h1 className="text-3xl font-bold mb-6 text-center text-red-600">
					Movie Recommendations
				</h1>
				<form
					className="flex items-center"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						ref={searchText}
						type="text"
						className="flex-grow p-4 bg-gray-800 border border-gray-700  text-white"
						placeholder="What do you want to watch?"
					/>
					<button
						className="p-4 bg-red-600 text-white  hover:bg-red-700"
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
