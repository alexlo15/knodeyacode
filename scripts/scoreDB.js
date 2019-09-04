const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodeyacode");

const scoreSeed = [

{
    userName: "Ash Ketchum",
    score: 15
}
    
];

db.Score
  .remove({})
  .then(() => db.Score.collection.insertMany(scoreSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
