const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodeyacode");
mongoose.connect(process.env.MONGODB_URI || "mongodb://alex:password123@ds253857.mlab.com:53857/heroku_6rw37vks");

const scoreSeed = [

{
    userName: "Ash Ketchum",
    email: "americalies2u@aol.com",
    score: 12
},
{
  userName: "Ash Ketchum",
  email: "americalies2u@aol.com",
  score: 13
},
{
  userName: "Ash Ketchum",
  email: "americalies2u@aol.com",
  score: 15
},
{
  userName: "Ash Ketchum",
  email: "americalies2u@aol.com",
  score: 14
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
