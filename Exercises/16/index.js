// title
// body
// author
// views
// comments
// (author, body)
// isLive

function Post(title, body, author, views, comments, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments; 
    this.isLive = isLive;
}

let post = new Post(
    "Aprendendo JavaScript",
    "Este post ensina sobre construtores.",
    "Matheus",
    100,
    [
        { author: "João", body: "Muito bom!" },
        { author: "Ana", body: "Ajudou bastante." }
    ],
    true
);

console.log(post)