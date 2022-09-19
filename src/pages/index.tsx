import type { NextPage } from "next";
import Head from "next/head";

import { IconButton } from "../components";
import { motion, Variants } from "framer-motion";
import config from "../../config.json";
import { calculateAge } from "../lib/utils";

const getVariants = (num: number) => {
	const variants: Variants = {
		initial: {
			transform: "translateY(10px)",
			opacity: 0,
		},
		animate: {
			transform: "translateY(0px)",
			opacity: 1,
			transition: {
				delay: num * 0.1,
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1],
			},
		},
	};

	return variants;
};

const Home: NextPage = () => {
	const age = calculateAge();

	return (
		<>
			<Head>
				<title>Home | JobGamesJG</title>
				<meta property="og:site_name" content="JobGamesJG" />
				<meta property="og:title" content="JobGamesJG" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://jobgamesjg.xyz" />
				<meta
					property="og:description"
					content={`Hello, my name is Job! ${age} year-old programmer from the Netherlands. This is my personal website, feel free to check it out!`}
				/>
				<meta property="og:image" content="https://cdn.jobgamesjg.xyz/files/JG-L.png?raw=true" />
			</Head>
			<div className="home-container">
				<div className="home-info">
					<div className="home-name">
						<p>{config.pages.home.prefix}</p>
						<p>{config.pages.home.name}</p>
					</div>
					<div className="home-description">
						<p>
							{age} {config.pages.home.description}
						</p>
					</div>
					<div className="home-buttons">
						{config.pages.home.buttons.map((data, key) => (
							<motion.div key={key} initial="initial" animate="animate" variants={getVariants(key)}>
								<IconButton {...data} type="link" style={data.title ? "black" : "string"} />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
