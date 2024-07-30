import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black text-gray-400 p-8 pt-20">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-white mb-4">Links</h3>
					<ul>
						<li className="mb-2">
							<a href="/" className="hover:underline">
								Home
							</a>
						</li>
						<li className="mb-2">
							<a href="/error" className="hover:underline">
								About Us
							</a>
						</li>
						<li className="mb-2">
							<a href="/error" className="hover:underline">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white mb-4">Social Media</h3>
					<ul className="flex space-x-4">
						<li>
							<a href="https://facebook.com" className="hover:text-white">
								<FaFacebookF />
							</a>
						</li>
						<li>
							<a href="https://twitter.com" className="hover:text-white">
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href="https://instagram.com" className="hover:text-white">
								<FaInstagram />
							</a>
						</li>
						<li>
							<a href="https://linkedin.com" className="hover:text-white">
								<FaLinkedinIn />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-4">
				<p>&copy; 2024 Your Company. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
