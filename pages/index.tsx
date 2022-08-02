import React, { useEffect, useState } from "react";
import { Socials } from "../components/page-related/";
import { calculateAge } from "../lib";
import type { NextPage } from "next";
import Head from "next/head";

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
			<div className="home-wrapper">
				<div className="home">
					<div className="home-title">
						<h1>Hi, I’m</h1> <h1>Job</h1>
					</div>
					<div className="home-info">
						<p>{age} year-old anime enjoyer and programmer</p>
					</div>
					<div className="home-socials">
						<Socials />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
