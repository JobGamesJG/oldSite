export type FC<Props extends Record<string, any> = {}> = React.FC<
	Props & { children?: React.ReactNode }
>;

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
