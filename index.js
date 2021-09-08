const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Movie = require("./models");
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/movies',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/', function (req, res) {
  res.send('Hello Trey and Keefe')
})

app.get("/movies", async (request, response) => {
  const movies = await Movie.find({});

  try {
    response.send(movies);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/movies", async (request, response) => {
  console.log(`you are here`, request)
  const movie = new Movie(request.body);

  try {
    await movie.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});
 
app.listen(8080)
console.log('app listening on port 8080')