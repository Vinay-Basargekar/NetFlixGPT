import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
	const navigate = useNavigate();
	const handleClick = (id) => {
		console.log(id);
		navigate(`/playMovie/${id}`);
	};

	return (
		<div
			className="w-36 md:w-48 pr-4 transition-transform duration-300 ease-in-out transform hover:scale-95 cursor-pointer"
			onClick={() => handleClick(movieId)}
		>
			<img
				src={IMG_CDN_URL + posterPath}
				alt="img-logo"
				className="rounded-md"
			/>
		</div>
	);
};

export default MovieCard;
