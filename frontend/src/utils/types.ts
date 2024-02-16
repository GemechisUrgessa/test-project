interface song {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    __v: number;
}
interface stats {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    songsInGenres: { _id: string; count: number }[];
    songsByArtists: { _id: string; count: number }[];
    songsInAlbums: { _id: string; count: number }[];
}
interface filterCriteria {
    artist: string;
    album: string;
    genre: string;
}
export type { song , stats , filterCriteria };