import { LitElement, html, css } from 'lit';
import { SideBar } from './components/side-bar.js';
import { ArtistDetails } from './components/artist-details.js';
import { ArtistService } from './services/artist-service.js';
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class SongManager extends LitElement {
  static properties = {
    header: { type: String },
    artistList: { type: Array }
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--song-manager-background-color);
    }

    main {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.artistList = [];
    this.selectedArtist = null; // null = No hay artista seleccionado. Es artista completo
  }

  async connectedCallback() {
    super.connectedCallback();
    this.artistList = await ArtistService.getArtists();
    console.log(this.artistList);
  }

  updateSelectedArtist(event) {
    console.log(event)
    const artistId = event.detail.authorId;
    this.selectedArtist = this.artistList.find((artist) => artist.id === artistId);
    console.log(this.selectedArtist)
  }

  render() {
    return html`
      <main>
        <side-bar .artists=${this.artistList} @artist-selected="${this.updateSelectedArtist}"></side-bar>
        <artist-details .selected-artist=${this.selectedArtist} ></artist-details>
      </main>
    `;
  }
}

customElements.define('song-manager', SongManager);