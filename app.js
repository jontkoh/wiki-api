const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/wikiAppDB",
                {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = new mongoose.model("Article", articleSchema)

// app.get('/', (req, res) => {
//   const article = new Article({
//     title: "title test", 
//     content: "content test"
//   });
//   article.save((err) => {
//     if (err) {
//       console.log(err);
//     }
//     else{
//       res.send("saved the article");
//     }
//   });
// });

app.get("/articles", (req, res) => {
  Article.find((err, docs) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(docs);
    }
  })
})

app.listen(3000, () => {
  console.log("running on port 3000");
});