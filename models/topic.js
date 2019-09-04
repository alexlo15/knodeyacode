const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
topicID: {
    type: String,
    required: true
},
name: {
    type: String,
    required: true
},

skillLevel: {
    type: String,
    required: true
}

});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;


// Topic.associate = function (models) {
//     // Associating Topics with Questions
//     Topic.hasMany(models.Question, {
//       onDelete: "cascade"
//     });
//   };