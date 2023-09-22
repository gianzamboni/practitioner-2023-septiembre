import { LitElement, html } from "lit";

const artists = [
  {
    createdAt: '2023-06-06T14:18:44.224Z',
    name: 'Mrs. Jared Steuber',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg',
    id: '2',
  },
  {
    createdAt: '2023-06-06T09:04:13.187Z',
    name: 'Maggie Krajcik',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/277.jpg',
    id: '3',
  },
];

export class SideBar extends LitElement {
  static properties = {
    artists: { type: Array },
  }

  constructor() {
    super();
    this.artists = [];
  }

  onElementClick(authorId) {
    const event = new CustomEvent('artist-selected', {
      detail: {
        authorId,
      }
    });
    this.dispatchEvent(event);
    console.log(`Click on ${authorId}`);
  }

  render() {
    console.log(this.artists);
    const artistElements = this.artists?.map(artist => html`
      <li  @click="${(event) => this.onElementClick(artist.id)}">
        ${artist.name}
      </li>
    `);

    return html`
      <aside id="sidebar">
          <h1 id="menu-title">My Music Library</h1>
          <div>
            <h2>Saved Artist</h2>
            <ul>
              ${ artistElements }
            </ul>
            <button>
              + Nuevo Artista 
            </button>
          </div>
      </aside>`
  }
}

customElements.define('side-bar', SideBar);