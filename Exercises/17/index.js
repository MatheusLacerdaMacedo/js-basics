function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post(
    "Aprendendo JavaScript",
    "Este post ensina sobre construtores.",
    "Matheus"
);

console.log(post);
