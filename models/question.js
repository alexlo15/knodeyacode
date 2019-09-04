const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Defines the table of Question for the database
const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  choice1: {
    type: String,
    required: true
  },
  choice2: {
    type: String,
    required: true
  },
  choice3: {
    type: String,
    required: true
  },
  topicId: {
    type: Schema.Types.ObjectId,
    ref: "Topic"
  },
  topic:{
    type:String,
    required:true
  }

  // date: { type: Date, default: Date.now }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

// ==================Forgeign key need to be setup=============================
// Question.associate = function(models) {
//     // Creates the foreign key from topics in questions
//     Question.belongsTo(models.Topic, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

 