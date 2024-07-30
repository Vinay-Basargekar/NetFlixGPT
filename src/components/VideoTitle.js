import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
	const navigate = useNavigate();

	const playMovie = (id) => {
		navigate(`/playMovie/${id}`);
	};

	return (
		<div className="z-20 w-screen aspect-square pt-[20%] px-6 mt-12 md:mt-0 md:px-20 absolute text-white md:bg-gradient-to-r md:from-black">
			<h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
			<p className="hidden md:inline-block py-6 text-xs md:text-lg w-[35%]">
				{overview}
			</p>
			<div className="my-4 md:m-0">
				<button
					onClick={() => playMovie(movieId)}
					className=" bg-white text-black py-1 md:py-4 px-2 md:px-12 md:text-xl  md:rounded-lg hover:bg-opacity-80 hover:cursor-pointer"
				>
					▶Play
				</button>
				<button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
					More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
