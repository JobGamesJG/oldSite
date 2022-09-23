import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { NextPage } from "next";
import Head from "next/head";

import { AnimeListComp, ImageSlider } from "../components/";
import { calculateAge, AnimeList } from "../lib";
import config from "../../config.json";

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
			<div className="about-container">
				<div className="about-me">
					<div className="about-info">
						<h1>About Me</h1>
						<p>
							{config.pages.about.about.text_1} {age} {config.pages.about.about.text_2}{" "}
							{config.pages.about.about.text_3}
						</p>
					</div>
					<img src={config.pages.about.about.picture} alt="" />
				</div>
				<div className="about-slider">
					<ImageSlider slides={config.pages.about.slider} />
				</div>
				<div className="about-anime">
					<h1>Anime</h1>
					<p>{config.pages.about.anime.text}</p>
					<AnimeListComp animes={animes} />
				</div>
			</div>
		</>
	);
};

export default About;
