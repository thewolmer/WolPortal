export interface Lanyard {
  data: Data;
  success: boolean;
}

export interface Data {
  spotify: Spotify;
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

export interface Activity {
  flags: number;
  id: string;
  name: string;
  type: number;
  state: string;
  session_id: string;
  details: string;
  timestamps: Timestamps;
  assets: Assets;
  sync_id: string;
  created_at: number;
  party: Party;
}

export interface Assets {
  large_image: string;
  large_text: string;
}

export interface Party {
  id: string;
}

export interface Timestamps {
  start: number;
  end: number;
}

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string;
  avatar_decoration: null;
  display_name: string;
  public_flags: number;
}

export interface Spotify {
  track_id: string;
  timestamps: Timestamps;
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}
