export type TMDBResponse = ImageObject & {
	backdrops: ImageObject[];
	posters: ImageObject[];
	logos: ImageObject[];
};

export type ImageObject = {
	tmdbId: number;
	aspect_ratio: number;
	height: number;
	iso_639_1?: string;
	file_path: string;
	vote_average: number;
	src?: string;
	vote_count: number;
	width: number;
};
