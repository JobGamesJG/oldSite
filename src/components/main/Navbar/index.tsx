import React, { useState } from "react";
import NavLink from "./navlink";

const Navbar: React.FC = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [active, setActive] = useState(false);

	return (
		<>
			<div className="navbar-wrapper">
				<div className="navbar-main">
					<img className="navbar-img" src="https://cdn.jobgamesjg.xyz/files/JG-L.png" alt="" />
					<div className="navbar-routes">
						<div className="navbar-links">
							<NavLink href="/" name="Home" mobile="" onClick={() => setNavOpen(false)} />
							<NavLink href="/about" name="About" mobile="" onClick={() => setNavOpen(false)} />
							<div className="navbar-indicator"></div>
						</div>
						<div
							className={`navbar-button ${active ? "active" : ""}`.trim()}
							onClick={() => setActive(!active)}>
							<div className="navbar-button-bar"></div>
							<div className="navbar-button-bar"></div>
							<div className="navbar-button-bar"></div>
						</div>
					</div>
				</div>
				<div className={`navbar-mobile ${active ? "active" : ""}`.trim()}>
					<div className="navbar-mobile-links">
						<NavLink
							href="/"
							name="Home"
							mobile="true"
							onClick={() => [setNavOpen(false), setActive(!active)]}
						/>
						<NavLink
							href="/about"
							name="About"
							mobile="true"
							onClick={() => [setNavOpen(false), setActive(!active)]}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
