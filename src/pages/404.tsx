import type { NextPage } from "next";

const NotFound: NextPage = () => {
	return (
		<div className="NotFound-container">
			<div className="NotFound-info">
				<p>Uh oh, this page does not exist. 🤔</p>
				<p>But here is a monkey.</p>
				<img src="https://cdn.jobgamesjg.xyz/files/HlCxwR69Ea.gif" alt="" />
			</div>
		</div>
	);
};

export default NotFound;
