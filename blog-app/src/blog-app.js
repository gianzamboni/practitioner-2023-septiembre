import { LitElement, html, css } from 'lit';
import { BlogPost } from './components/blog-post.js';


const example = {
  title: 'Creando nuestros componentes con LitElement',
  author: 'Franco Frizzo',
  date: new Date(),
  content: 'Contenido del post…',
  categories: ['Desarrollo web', 'LitElement'],
  highlighted: true,
};

class BlogApp extends LitElement {
  static properties = {
    header: { type: String },
    buttonTitle: { type: String }
  };

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
      background-color: var(--blog-app-background-color);
    }

    main {
      flex-grow: 1;
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
    this.header = 'Nuevo valor default'; // await
    this.showButton = true;
    this.posts = [
      { title: "Test 1", author: "Franco Frizzo", content: "Contenido 1", highlighted: false },
      { title: "Test 2", content: "Contenido 2", highlighted: false },
      { title: "Test 3", author: "Franco Frizzo", content: "Contenido 3", highlighted: false },
    ] 
  }

  updated() {
    console.log("Cambio el titulo")
  }

  changeTitle() {
    this.header = 'Nuevo valor'; 
    this.showButton = false;
  }

  highlightedHandler(event) {
    console.log(this.header)
    console.log(event.detail)
    // Crear un nuevo array de posts: Todos los posts van a ser iguales a los que ya tengo
    // excepto el que tiene el nombre que me llega por el evento
    const newPosts = // completar
    
      // Modifico el post que quiero cambiar
      // completar 
      // Actualizo el array de posts
      this.posts = newPosts;
    
  }

  render() {
    // [ post1, post2, post3 ] => [ <blog-post>, <blog-post>, <blog-post> ]
    const postList = this.posts.map(
      post =>
        html`<blog-post
          class="col col-sm-12 col-md-6 col-lg-4 col-xl-3"
          name=${post.title}
          content=${post.content}
          author=${post.author}
          @highlighted=${this.highlightedHandler}
        ></blog-post>`
    );

    return html`<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      ></script>
      <main class="container">
        <div class="row">${postList}</div>
      </main>`;
  }
}

customElements.define('blog-app', BlogApp);
