import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);

	const email = useRef(null);
	const password = useRef(null);

	function toggleSignIn() {
		setIsSignIn(!isSignIn);
	}

	const handleClick = () => {
		const { emailError, passwordError } = checkValidData(
			email.current.value,
			password.current.value
		);
		setEmailError(emailError);
		setPasswordError(passwordError);

		// If there are validation errors, do not proceed
		if (emailError || passwordError) return;

		if (!isSignIn) {
			// Sign up logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					console.log(user);
					// Reset form fields or redirect user as needed
				})
				.catch((error) => {
					const errorMessage = error.message;
					setEmailError(errorMessage);
					setPasswordError(errorMessage);
				});
		} else {
			// Sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setEmailError(errorMessage);
					setPasswordError(errorMessage);
				});
		}
	};

	return (
		<div className="relative h-screen w-screen">
			<Header />
			<div className="absolute inset-0 z-0">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
					alt="background-img"
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0 bg-black opacity-60"></div>
			</div>
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
				<div className="bg-black bg-opacity-75 p-8 rounded h-[30rem] w-[25rem]">
					<h1 className="text-3xl mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							placeholder="Enter email"
							className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
							ref={email}
						/>
						{emailError && <p className="text-red-500 mb-2">{emailError}</p>}
						{!isSignIn && (
							<input
								type="text"
								placeholder="Full Name"
								className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
								required
							/>
						)}
						<input
							type="password"
							placeholder="Password"
							className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
							ref={password}
						/>
						{passwordError && (
							<p className="text-red-500 mb-4">{passwordError}</p>
						)}
						<button
							onClick={handleClick}
							className="w-full p-2 bg-red-600 hover:bg-red-700 rounded"
						>
							{isSignIn ? "Sign In" : "Sign Up"}
						</button>
						<div className="mt-4 flex justify-between items-center">
							{isSignIn && (
								<>
									<div>
										<input type="checkbox" id="remember-me" />
										<label htmlFor="remember-me" className="ml-2">
											Remember me
										</label>
									</div>
									<Link to="#" className="text-gray-400">
										Forgot password?
									</Link>
								</>
							)}
						</div>
						<div className="mt-4">
							<Link to="#" className="text-gray-400">
								{isSignIn ? (
									<>
										New to Netflix?{" "}
										<span className="text-white" onClick={toggleSignIn}>
											Sign up now.
										</span>
									</>
								) : (
									<>
										Already have an account?{" "}
										<span className="text-white" onClick={toggleSignIn}>
											Sign in.
										</span>
									</>
								)}
							</Link>
						</div>
						{isSignIn && (
							<p className="text-gray-400 text-sm mt-4">
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.{" "}
								<Link to="#" className="text-blue-500">
									Learn more.
								</Link>
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
