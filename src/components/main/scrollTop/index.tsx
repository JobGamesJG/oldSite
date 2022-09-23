import React, { useEffect, useState } from "react";
import { Button } from "../../";

import { motion, useAnimation, Variants } from "framer-motion";

const variants: Variants = {
	disabled: {
		opacity: 0,
		transform: "translateY(50px)",
		pointerEvents: "none",
		transition: {
			duration: 0.3,
			ease: [0.6, -0.05, 0.01, 0.9],
		},
	},
	enabled: {
		opacity: 1,
		transform: "translateY(0px)",
		pointerEvents: "all",
		transition: {
			duration: 0.3,
			ease: [0.6, -0.05, 0.01, 0.9],
		},
	},
};

export const ScrollTop: React.FC = () => {
	const [active, setActive] = useState(false);
	const control = useAnimation();

	useEffect(() => window.addEventListener("scroll", () => setActive(window.scrollY > 100)), []);

	useEffect(() => {
		if (active) void control.start("enabled");
		else void control.start("disabled");
	}, [control, active]);

	return (
		<motion.div
			className={`scrollTop-container ${active ? " active" : ""}`.trim()}
			initial="disabled"
			variants={variants}
			animate={control}>
			<Button
				type="button"
				style="main"
				icon="fa-solid fa-arrow-up"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}></Button>
		</motion.div>
	);
};
