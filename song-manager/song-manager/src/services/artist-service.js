export class ArtistService {
  static async getArtists() {
    const response = await fetch('https://634827500b382d796c6acadd.mockapi.io/music/author');
    const artists = await response.json();
    return artists;
  }
}