import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<div className="navbar">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
				alt="Netflix Logo"
				className="nav-logo"
			/>

			<img
				src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
				alt="Login Profile"
				className="login-profile"
			/>
		</div>
	);
}

export default Navbar;
