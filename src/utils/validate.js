// utils/validate.js

export function checkValidData(email, password) {
	let emailError = "";
	let passwordError = "";

	// Basic email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(email)) {
		emailError = "Please enter a valid email address.";
	}

	if (password.length < 6) {
		passwordError = "Must be 6 characters long.";
	}

	return { emailError, passwordError };
}
