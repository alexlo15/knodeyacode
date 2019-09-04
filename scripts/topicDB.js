const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knodyacode");

const topicSeed = [

    {   topicId:"1",
        name: "HTML",
        skillLevel: "1"
      }, {
        topicId:"2",
        name: "HTML",
        skillLevel: "2"
      }, {
        topicId:"3",
        name: "HTML",
        skillLevel: "3"
      }, {
        topicId:"4",
        name: "CCS",
        skillLevel: "1"
      }, {
        topicId:"5",
        name: "CCS",
        skillLevel: "2"
      }, {
        topicId:"6",
        name: "CCS",
        skillLevel: "3"
      }, {
        topicId:"7",
        name: "Javascript",
        skillLevel: "1"
      }, {
        topicId:"8",
        name: "Javascript",
        skillLevel: "2"
      }, {
        topicId:"9",
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
