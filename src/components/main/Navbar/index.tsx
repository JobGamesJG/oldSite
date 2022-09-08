import React, { useEffect, useState } from "react";
import { Button } from "../../general";
import NavLink from "./navlink";

export const Navbar: React.FC = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [active, setActive] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => window.addEventListener("scroll", () => setScroll(window.scrollY > 10)), []);

	return (
		<div className={`navbar-container-wrapper ${scroll ? "active" : ""}`.trim()}>
			<div className="navbar-main">
				<img className="navbar-img" src="https://cdn.jobgamesjg.xyz/files/JG-L.png" alt="" />
				<div className="navbar-routes">
					<div className="navbar-links">
						<Button path="/" title="Home" style="nav" type="link" />
						<Button path="/about" title="About" style="nav" type="link" />
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
					<Button path="/" title="Home" style="nav" type="link" onClick={() => setActive(false)} />
					<Button
						path="/about"
						title="About"
						style="nav"
						type="link"
						onClick={() => setActive(false)}
					/>
				</div>
			</div>
		</div>
	);
};
