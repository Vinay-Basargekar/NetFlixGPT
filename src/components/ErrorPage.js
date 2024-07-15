import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<h1 className="text-4xl font-bold mb-4">This is embarrassing 🙈</h1>
				<p className="text-lg mb-8">
					The page you are looking for doesn't exist or has been moved.
				</p>
				<Link
					to="/browse"
					className="inline-block bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-700"
				>
					Back to home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
