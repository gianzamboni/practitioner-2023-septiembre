import { LitElement, html } from "lit";
const artist = {
  createdAt: '2023-06-06T14:18:44.224Z',
  name: 'Mrs. Jared Steuber',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg',
  id: '2',
};
export class ArtistDetails extends LitElement {
  static properties = {
    artist: { type: Object },
  }

  constructor() {
    super();
    this.artist = {};
  }

  render() {
    return html`
      <div id="artist-details">
        <div id="artist-details-header">
          <img alt="artist-profile-picture" src="https://picsum.photos/200/200" />
          <h1>Artist name</h1>
        </div>
        <div id="artist-details-body">
          <h2>Canciones creadas</h2>
          <table>
            <tr>
              <th>Titulo</th>
              <th>Duracion</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
            </tr>
          </table>
      <button>
        + Nueva Cancion
      </button>
    </div>
  </div>`
  }
}

customElements.define('artist-details', ArtistDetails);