import React, { useEffect, useState } from "react";
import { Button } from "../../general/button";

import { motion, useAnimation, Variants } from "framer-motion";

const variants: Variants = {
	disabled: {
		opacity: 0,
		transform: "translateY(-10px)",
		pointerEvents: "none",
		transition: {
			duration: 0.1,
			ease: [0.6, -0.05, 0.01, 0.9],
		},
	},
	enabled: {
		opacity: 1,
		transform: "translateY(0px)",
		pointerEvents: "all",
		transition: {
			duration: 0.1,
			ease: [0.6, -0.05, 0.01, 0.9],
		},
	},
};

export const Header: React.FC = () => {
	const [active, setActive] = useState(false);
	const [scroll, setScroll] = useState(false);
	const control = useAnimation();

	useEffect(() => window.addEventListener("scroll", () => setScroll(window.scrollY > 10)), []);

	useEffect(() => {
		if (active) void control.start("enabled");
		else void control.start("disabled");
	}, [control, active]);

	return (
		<div className={`header-container ${scroll ? "active" : ""}`.trim()}>
			<div className="header-main">
				<img className="header-LG" src="https://cdn.jobgamesjg.xyz/files/JG-L.png" alt="" />
				<div className="header-links">
					<Button path="/" title="Home" style="header" type="link" />
					<Button path="/about" title="About" style="header" type="link" />
					<div className={`header-dropdown ${active ? "active" : ""}`.trim()}>
						<div
							className={`header-button ${active ? "active" : ""}`.trim()}
							onClick={() => setActive(!active)}>
							<div />
							<div />
							<div />
						</div>
						<motion.div
							className="header-overlay"
							initial="disabled"
							variants={variants}
							animate={control}>
							<Button
								path="/"
								title="Home"
								style="header"
								type="link"
								icon="fa-solid fa-house"
								onClick={() => setActive(false)}
							/>
							<Button
								path="/about"
								title="About"
								style="header"
								type="link"
								icon="fa-solid fa-circle-info"
								onClick={() => setActive(false)}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};
