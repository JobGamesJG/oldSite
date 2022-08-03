import { Info, AnimeListComp } from "../components/page-related/";
import { calculateAge, AnimeList } from "../lib";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const About: NextPage = () => {
	const [animes, setAnimes] = useState<AnimeList[] | null>(null);
	const age = calculateAge();

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<{ animes: AnimeList[] }>("/api/anime", { cancelToken: token })
			.then((res) => setAnimes(res.data.animes))
			.catch((err: AxiosError) => console.error(`[Animes]: ${err.message}`));

		return () => cancel("Request cancelled");
	}, []);

	return (
		<>
			<Head>
				<title>About | JobGamesJG</title>
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
			<div className="about-wrapper">
				<div className="about">
					<div className="about-me">
						<img
							alt=""
							className="about-img"
							src="https://cdn.jobgamesjg.xyz/files/JG-Picture.png"
						/>
						<Info />
					</div>
					<div className="animeManga">
						<h1 className="about-title">Animes</h1>
						<p className="about-text">
							I watch a lot of anime, and with a lot I really mean A LOT. My record is 50+ episodes
							in 1 day, that is over 16 hours of watching. School does ruin it tho, I am not able to
							watch a lot anymore because of that. Anyways, you can check what I watched/want to
							watch here. Additionally you can checkout my MyAnimeList profile as well!
						</p>
						<AnimeListComp animes={animes} />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
