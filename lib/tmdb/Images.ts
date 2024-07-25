import type { ImageObject } from '@/types/tmdb/images';
import { TmdbImageGet } from './helper';

type BackdropSizes = 'w300' | 'w780' | 'w1280' | 'original';
type LogoSizes = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original';
type PosterSizes = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';

interface BaseImagesProps {
	type: 'movie' | 'tv';
	language: 'en' | 'hi' | 'null';
	image_type: 'backdrops' | 'posters' | 'logos';
}

interface BackdropImagesProps extends BaseImagesProps {
	image_type: 'backdrops';
	size: BackdropSizes;
}

interface LogoImagesProps extends BaseImagesProps {
	image_type: 'logos';
	size: LogoSizes;
}

interface PosterImagesProps extends BaseImagesProps {
	image_type: 'posters';
	size: PosterSizes;
}

type ImagesProps = BackdropImagesProps | LogoImagesProps | PosterImagesProps;

export const getImages = async (id: number, { type, image_type, language, size }: ImagesProps) => {
	try {
		const res = await TmdbImageGet(`/${type}`, {
			revalidate: 3600,
			searchParams: {
				id,
			},
		});
		if (!res.ok) return;
		const json = await res.json();
		const selectedImages = json[image_type] as ImageObject[];

		let filteredImages: ImageObject[] = [];

		const filteredItems = selectedImages.filter((image: ImageObject) => image.iso_639_1 === language);

		if (filteredItems.length === 0) {
			filteredImages = selectedImages;
		} else {
			filteredImages = filteredItems;
		}

		const imageWithMostVotes = filteredImages.reduce((prevImage, currImage) => {
			return currImage.vote_count > prevImage.vote_count ? currImage : prevImage;
		});

		return {
			...imageWithMostVotes,
			src: `https://image.tmdb.org/t/p/${size}${imageWithMostVotes.file_path}`,
		};
	} catch (error) {
		console.error('Error fetching images:', error);
	}
};
