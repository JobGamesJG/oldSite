import React, { useEffect, useState } from "react";

export const ScrollTop: React.FC = () => {
	const [active, setActive] = useState(false);
	useEffect(() => window.addEventListener("scroll", () => setActive(window.scrollY > 100)), []);

	return (
		<>
			<div
				className={`scrollTop ${active ? " active" : ""}`.trim()}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
				<i className="fa-solid fa-arrow-up"></i>
			</div>
		</>
	);
};
