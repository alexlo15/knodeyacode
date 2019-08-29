const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodyacode");

const topicSeed = [

    {
        name: "HTML",
        skillLevel: "1"
      }, {
        name: "HTML",
        skillLevel: "2"
      }, {
        name: "HTML",
        skillLevel: "3"
      }, {
        name: "CCS",
        skillLevel: "1"
      }, {
        name: "CCS",
        skillLevel: "2"
      }, {
        name: "CCS",
        skillLevel: "3"
      }, {
        name: "Javascript",
        skillLevel: "1"
      }, {
        name: "Javascript",
        skillLevel: "2"
      }, {
        name: "Javascript",
        skillLevel: "3"
      }

    
];

db.Topic
  .remove({})
  .then(() => db.Topic.collection.insertMany(topicSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
