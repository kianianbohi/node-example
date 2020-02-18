//  const http = require("http");
//  const server = http.createServer(function (req, res) {
//      console.log(`user visited ${req.url}`);
//      res.end("hello");
//  });

//  console.log("listening on http://localhost:3000");
//  server.listen(3000); 
// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//     res.end("welcome to my site");
// })

// app.get("/complement", function (req, res) {
//     res.end("you look nice today");
// })

// app.listen(3000);
// console.log("listening on http://localhost:3000");
// console.log("dasdsa");
const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");