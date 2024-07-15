import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useUserStore from "../utils/useUserStore";

const Header = () => {
	//Zustand store
	const user = useUserStore((state) => state.user);

	const navigate = useNavigate();
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	//zustand store user set and clear
	const setUser = useUserStore((state) => state.setUser);
	const clearUser = useUserStore((state) => state.clearUser);

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
		//code from firebase to Get the currently signed-in user
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
		<header
			className={`flex justify-between items-center p-4 ${
				user ? "bg-black opacity-90" : ""
			}`}
		>
			<div className="logo">
				<Link to="/browse">
					<img
						src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
						alt="Netflix Logo"
						className="w-52"
					/>
				</Link>
			</div>
			{user && (
				<div className="relative flex items-center space-x-4">
					<div className="relative">
						<button
							className="flex items-center text-white flex-col"
							onClick={toggleDropdown}
						>
							<img
								className="w-13 h-12 mr-10"
								src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
								alt="User Icon"
							/>
							<span className="font-bold mr-10">
								{user ? user.displayName : "No user"}
							</span>
						</button>
						{isDropdownVisible && (
							<div className="absolute right-0 w-56 mt-2 bg-white rounded-md shadow-lg z-20">
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
										to="/error"
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
				</div>
			)}
		</header>
	);
};

export default Header;
