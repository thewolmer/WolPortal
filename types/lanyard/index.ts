export interface LanyardResponse {
	op: number;
	d: LanyardData;
	t: string;
}

export interface LanyardData {
	kv: Kv;
	spotify: Spotify;
	discord_user: DiscordUser;
	activities: LanyardActivity[];
	discord_status: string;
	active_on_discord_web: boolean;
	active_on_discord_desktop: boolean;
	active_on_discord_mobile: boolean;
	listening_to_spotify: boolean;
}

type Kv = Record<string, string>;

export interface Spotify {
	track_id: string;
	timestamps: Timestamps;
	album: string;
	album_art_url: string;
	artist: string;
	song: string;
}

interface Timestamps {
	start: number;
	end: number;
}

interface DiscordUser {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	bot: boolean;
	clan: any;
	global_name: string;
	avatar_decoration_data: any;
	display_name: string;
	public_flags: number;
}

export interface LanyardActivity {
	id: string;
	name: string;
	type: number;
	timestamps: Timestamps2;
	application_id?: string;
	assets: Assets;
	created_at: number;
	flags?: number;
	state?: string;
	session_id?: string;
	details?: string;
	sync_id?: string;
	party?: Party;
}

interface Timestamps2 {
	start: number;
	end?: number;
}

interface LanyardAssets {
	large_image: string;
	large_text: string;
	small_image?: string;
	small_text?: string;
}

interface Party {
	id: string;
}
