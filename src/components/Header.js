// Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useUserStore from "../utils/useUserStore";

const Header = () => {
	const user = useUserStore((state) => state.user);
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	return (
		<header className="flex justify-between items-center p-4 bg-black opacity-90">
			<div className="logo">
				<Link to="/">
					<img
						src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
						alt="Netflix Logo"
						className="w-52"
					/>
				</Link>
			</div>
			<nav className="flex space-x-4 text-xl">
				<Link
					to="/error"
					className="text-white hover:text-red-600 transition-colors duration-300"
				>
					Home
				</Link>
				<Link
					to="/error"
					className="text-white hover:text-red-600 transition-colors duration-300"
				>
					TV Shows
				</Link>
				<Link
					to="/error"
					className="text-white hover:text-red-600 transition-colors duration-300"
				>
					Movies
				</Link>
				<Link
					to="/error"
					className="text-white hover:text-red-600 transition-colors duration-300"
				>
					My List
				</Link>
			</nav>
			<div className="relative flex items-center space-x-4">
				<div className="relative group">
					<button className="flex items-center  text-white flex-col">
						<img
							className="w-13 h-12 mr-10"
							src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
							alt="User Icon"
						/>
						<span className="font-bold mr-10">
							{user ? user.displayName : "No user"}
						</span>
					</button>
					<div className="absolute right-0 hidden w-56 mt-2 bg-white rounded-md shadow-lg group-hover:block">
						<div className="px-4 py-3">
							<p className="text-sm text-gray-900">
								{user ? user.displayName : "No user"}
							</p>
							<p className="text-sm font-medium text-gray-900 truncate">
								{user ? user.email : ""}
							</p>
						</div>
						<div className="py-1">
							<Link
								to="/settings"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								Settings
							</Link>
							<button
								onClick={handleSignOut}
								className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
