import React from "react";

const GptSearch = () => {
	return (
		<div className="flex pt-20 justify-center min-h-screen bg-black text-white">
			<div className="p-4 w-full max-w-md">
				<h1 className="text-3xl font-bold mb-4 bg-red-600 text-center">
					GPT Search
				</h1>
				<div className="flex items-center mb-4">
					<input
						type="text"
						className="flex-grow p-2 bg-gray-800 border border-gray-700 rounded-l text-white"
						placeholder="Enter your search query..."
					/>
					<button className="p-2 bg-red-600 text-white rounded-r hover:bg-red-700">
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default GptSearch;
