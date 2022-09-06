import React, { useState } from "react";
import { calculateAge } from "../lib";
import config from "../../config.json";
import { motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";

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
			<div className="background-triangle" />
			<div className="home-wrapper">
				<div className="home">
					<div className="home-title">
						<h1>{config.pages.home.prefix}</h1> <h1>{config.pages.home.name}</h1>
					</div>
					<div className="home-info">
						<p>
							{age} {config.pages.home.description}
						</p>
					</div>
					<div className="home-socials">
						{config.pages.home.buttons.map((data: { icon: string; path: string }, key: number) => (
							<motion.div initial="initial" animate="animate" key={key} variants={getVariants(key)}>
								<a className={data.icon} href={data.path}></a>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
