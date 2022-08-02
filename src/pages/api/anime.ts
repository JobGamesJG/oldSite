import type { NextApiRequest, NextApiResponse } from "next";
import type { AnimeList, AnimeListRaw } from "../../lib/types";
import axios from "axios";

const Anime = async (_: NextApiRequest, res: NextApiResponse) => {
	const getStatus = (status: number): string => {
		const choice = ["watching", "completed", "on hold", "dropped", "", "plan to watch"][status - 1];
		return choice;
	};

	const getColor = (status: number): string => {
		const choice = ["#4071f4", "#90E855", "#FB9D48", "#D83C4A", "", "#FCFA56"][status - 1];
		return choice;
	};

	const getIcon = (status: number): string => {
		const choice = [
			"fas fa-eye",
			"fas fa-check-circle",
			"fas fa-pause-circle",
			"fas fa-trash-alt",
			"",
			"far fa-calendar-alt",
		][status - 1];
		return choice;
	};

	const getStatusIcon = (status: string): string => {
		let choice = "";

		if (status == "Movie") {
			choice = "fas fa-film";
		} else if (status == "TV") {
			choice = "fas fa-tv";
		} else if (status == "Special") {
			choice = "fa-solid fa-wand-magic-sparkles";
		} else {
			choice = "fas fa-film";
		}

		return choice;
	};

	const getGenre = (status: any): any => {
		let choice = "";

		for (let i = 0; i < 30; i++) {
			if (status[i]) {
				let str = choice + ", " + status[i].name;
				let char = str[0];
				choice = str.replace(char, " ");
			}
		}

		return choice;
	};

	const IfZero = (choice: string): string => {
		if (choice == "0") {
			choice = "?";
		}

		return choice;
	};

	const response = await axios
		.get<AnimeListRaw[]>("https://myanimelist.net/animelist/JobGamesJG/load.json?status=7&offset=0")
		.catch(() => null);

	if (!response) return res.status(200).json({ animes: [] });

	const { data } = response;
	const animes = data.map<AnimeList>((anime) => ({
		img: anime.anime_image_path.replace("r/96x136/", ""),
		eps_watchted: IfZero(anime.num_watched_episodes),
		eps_num: IfZero(anime.anime_num_episodes),
		rating: IfZero(anime.score),
		title: anime.anime_title,
		animeTypeIcon: getStatusIcon(anime.anime_media_type_string),
		animeType: anime.anime_media_type_string,
		status: getStatus(anime.status),
		genres: getGenre(anime.genres),
		color: getColor(anime.status),
		icon: getIcon(anime.status),
		url: `https://myanimelist.net${anime.anime_url}`,
	}));

	return res.status(200).json({ animes });
};

export default Anime;
