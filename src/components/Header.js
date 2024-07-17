import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useUserStore from "../utils/useUserStore";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constant";
import useGptStore from "../utils/useGptStore";
import GitHubButton from "./GitHubButton";

const Header = () => {
	const navigate = useNavigate();
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	// Zustand store
	const user = useUserStore((state) => state.user);
	const setUser = useUserStore((state) => state.setUser);
	const clearUser = useUserStore((state) => state.clearUser);

	const { toggleGpt, setToggle } = useGptStore();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};

	useEffect(() => {
		// Fetch the currently signed-in user from Firebase Auth
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				setUser({ uid, email, displayName });
				navigate("/browse");
			} else {
				clearUser();
				navigate("/");
			}
		});

		// Clean up the subscription on unmount
		return () => unsubscribe();
	}, [setUser, clearUser, navigate]);

	return (
		<header className="absolute z-50 w-screen flex justify-between items-center p-4 bg-gradient-to-b from-black">
			<div className="logo">
				<Link to="/browse">
					<img src={NETFLIX_LOGO} alt="Netflix Logo" className="w-52" />
				</Link>
			</div>

			{user && (
				<div className="relative flex items-center space-x-4">
					<button
						onClick={setToggle}
						className="relative z-10 py-2 px-3 mx-2 mb-6 font-bold text-white transition-all duration-300 ease-in-out bg-purple-600 border border-white-900 cursor-pointer bg-[url('data:image/svg+xml,%3Csvg xmlns=&#39http://www.w3.org/2000/svg&#39 viewBox=&#390 0 531.28 200&#39%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23FF4655 %7D %3C/style%3E%3C/defs%3E%3Cg id=&#39Layer_2&#39 data-name=&#39Layer 2&#39%3E%3Cg id=&#39Layer_1-2&#39 data-name=&#39Layer 1&#39%3E%3Cpolygon class=&#39shape&#39 points=&#39415.81 200 0 200 115.47 0 531.28 0 415.81 200&#39 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A')] bg-contain bg-no-repeat"
						style={{
							fontFamily: "'Ropa Sans', sans-serif",
							fontSize: "15px",
							letterSpacing: "0.05rem",
						}}
					>
						{toggleGpt?"Homepage":"GPT search"}
					</button>

					<div className="relative">
						<button
							className="flex items-center text-white flex-col relative"
							onClick={toggleDropdown}
						>
							<img
								className="w-13 h-12 mr-2"
								src={USER_AVATAR}
								alt="User Icon"
							/>
							<span className="font-bold mr-4">
								{user ? user.displayName : "No user"}
							</span>
						</button>

						{isDropdownVisible && (
							<div className="absolute right-0 mt-8 w-56 bg-white rounded-md shadow-lg z-20">
								<div className="px-2 py-3">
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
						)}
					</div>

					<GitHubButton />
				</div>
			)}
		</header>
	);
};

export default Header;
