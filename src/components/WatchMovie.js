import React from "react";

function WatchMovie({ movieTrailer, description, title }) {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
			<h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
				{title} Hello paaji
			</h1>
			<div className="w-full md:w-3/4 lg:w-1/2 mb-4">
				<iframe
					className="w-full h-64 md:h-96"
					src={movieTrailer}
					title="Movie Trailer"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<p className="text-lg md:text-xl text-center px-4">{description} description will be here</p>
		</div>
	);
}

export default WatchMovie;
