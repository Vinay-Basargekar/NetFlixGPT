import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
	const navigate = useNavigate();

	const playMovie = (id) => {
		navigate(`/playMovie/${id}`);
	};

	return (
		<div className="z-20 w-screen aspect-square pt-[20%] px-6 mt-28 md:mt-0 md:px-20 absolute text-white md:bg-gradient-to-r md:from-black">
			<h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
			<p className="hidden md:inline-block py-6 text-xs md:text-lg w-[35%]">
				{overview}
			</p>
			<div className="my-4 md:m-0">
				<button
					onClick={() => playMovie(movieId)}
					className="bg-white text-black py-1 md:py-4 px-2 md:px-12 md:text-xl  md:rounded-lg hover:bg-opacity-80 hover:cursor-pointer"
				>
					<div className="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
								clip-rule="evenodd"
							/>
						</svg>
						<p>Play</p>
					</div>
				</button>
				<button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
					More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
