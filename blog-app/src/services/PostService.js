class PostService {
  static async getPosts() {
    return await fetch('https://base.url/api/posts')
  }

  static async postPost(post) {
    await fetch('https://base.url/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  }
}