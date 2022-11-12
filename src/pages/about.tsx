import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { NextPage } from "next";
import Head from "next/head";

import { AnimeListComp, Button, Card, ImageSlider } from "../components/";
import { calculateAge, AnimeList } from "../lib";
import config from "../../config.json";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";

const variants: Variants = {
	disabled: {
		opacity: 0,
		transform: "translateX(50px)",
		pointerEvents: "none",
		transition: {
			duration: 0.3,
			ease: [0.6, -0.05, 0.01, 0.9],
		},
	},
	enabled: {
		opacity: 1,
		transform: "translateX(0px)",
		pointerEvents: "all",
		transition: {
			duration: 0.3,
			ease: [0.6, -0.05, 0.01, 0.9],
		},
	},
};

const About: NextPage = () => {
	const [animes, setAnimes] = useState<AnimeList[] | null>(null);
	const [current, setCurrent] = useState("choose");
	const [filter, setFilter] = useState("all");
	const control = useAnimation();

	const age = calculateAge();

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<{ animes: AnimeList[] }>("/api/anime", { cancelToken: token })
			.then((res) => setAnimes(res.data.animes))
			.catch((err: AxiosError) => console.error(`[Animes]: ${err.message}`));

		return () => cancel("Request cancelled");
	}, []);

	useEffect(() => {
		if (current != "choose") void control.start("enabled");
		else void control.start("disabled");
	}, [control, current]);

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
				<meta property="og:image" content="https://cdn.jobgamesjg.xyz/files/JG-L.png" />
			</Head>
			<motion.div
				className={`about-close ${current}`}
				initial="disabled"
				variants={variants}
				animate={control}>
				<Button
					style="main"
					type="button"
					icon="fa-solid fa-xmark"
					onClick={() => setCurrent("choose")}
				/>
			</motion.div>
			<motion.div
				key={current}
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						duration: 0.5,
						ease: [0.6, -0.05, 0.01, 0.99],
					},
				}}
				exit={{ opacity: 0 }}>
				<div className={`about-container ${current}`}>
					{current == "choose" ? (
						<div className="about-start">
							<div className="choose-container">
								{config.pages.about.cards.map((data, key) => (
									<Card key={key} {...data} onClick={() => setCurrent(data.onclick)} />
								))}
							</div>
						</div>
					) : current == "me" ? (
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
					) : current == "photo" ? (
						<ImageSlider slides={config.pages.about.slider} />
					) : current == "anime" ? (
						<div className={`about-anime ${filter}`}>
							<h1>Anime</h1>
							<p>{config.pages.about.anime.text}</p>
							<div className="anime-filter">
								<p onClick={() => setFilter("all")}>all</p>
								<p onClick={() => setFilter("watching")}>watching</p>
								<p onClick={() => setFilter("completed")}>completed</p>
								<p onClick={() => setFilter("onhold")}>on hold</p>
								<p onClick={() => setFilter("dropped")}>dropped</p>
								<p onClick={() => setFilter("plantowatch")}>plan to watch</p>
							</div>
							<AnimeListComp animes={animes} />
						</div>
					) : (
						<></>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default About;
