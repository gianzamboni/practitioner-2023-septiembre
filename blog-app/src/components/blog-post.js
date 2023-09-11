import { LitElement, html } from "lit";

// Blog post emite "highlighted"
export class BlogPost extends LitElement {
  static properties = {
    name: { type: String },
    author: { type: String },
    content: { type: String },
    highlighted: { type: Boolean },
  };

  constructor() {
    super();
    this.name = '';
    this.author = '';
    this.content = '';
  }

  clickHandler() {
    this.dispatchEvent(new CustomEvent('highlighted', {
      detail: {
        name: this.name,
        highlighted: !this.highlighted, /// toggle
      } 
    }));
    console.log('clickHandler');
  }

  render() {
  return html`
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<div class="container">
    <div class="row">
      <div class="col">
        <h4>${this.name}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        ${this.author === '' ? '' : html`<h5>${this.author}</h5>`}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>${this.content}</p>
      </div>
      <button class="btn btn-primary" @click=${
        this.clickHandler
      }>Destacar</button>
    </div>
    </div>
    `;
  }
}

customElements.define('blog-post', BlogPost);
