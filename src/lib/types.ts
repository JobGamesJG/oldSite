export interface AnimeListRaw {
	status: number;
	score: string;
	tags: string;
	is_rewatching: number;
	num_watched_episodes: string;
	anime_title: string;
	anime_num_episodes: string;
	anime_airing_status: number;
	anime_id: number;
	anime_studios: null;
	anime_licensors: null;
	anime_season: null;
	has_episode_video: boolean;
	has_promotion_video: boolean;
	has_video: boolean;
	video_url: string;
	genres: [{ id: number; name: string }];
	anime_url: string;
	anime_image_path: string;
	is_added_to_list: boolean;
	anime_media_type_string: string;
	anime_mpaa_rating_string: string;
	start_date_string: null;
	finish_date_string: null;
	anime_start_date_string: string;
	anime_end_date_string: string;
	days_string: null;
	storage_string: string;
	priority_string: string;
}

export interface AnimeList {
	img: string;
	eps_watchted: string;
	eps_num: string;
	status: string;
	icon: string;
	rating: string;
	title: string;
	animeTypeIcon: string;
	animeType: string;
	genres: string;
	color: string;
	url: string;
}

export interface MangaListRaw {
	status: number;
	score: string;
	tags: string;
	is_rereading: number;
	num_read_chapters: string;
	num_read_volumes: string;
	manga_title: string;
	manga_english: string;
	manga_num_chapters: string;
	manga_num_volumes: string;
	manga_media_type_string: string;
	manga_publishing_status: number;
	manga_id: number;
	manga_magazines: null;
	genres: [{ id: number; name: string }];
	manga_url: string;
	manga_image_path: string;
}

export interface MangaList {
	img: string;
	num_read_chapters: string;
	num_read_volumes: string;
	num_chapters: string;
	num_volumes: string;
	mangaType: string;
	status: string;
	icon: string;
	rating: string;
	title: string;
	statusIcon: string;
	genres: string;
	color: string;
	url: string;
}

export interface MinecraftListRaw {
	id: string;
	name: string;
	properties: [{ name: string; value: string }];
}

export interface MinecraftList {
	id: string;
	name: string;
	value: string;
}
