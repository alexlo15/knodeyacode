const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
userName: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
flashcardCSS: {
    type: Boolean,
},
flashcardHTML: {
    type: Boolean,
},
flashcardJS: {
    type: Boolean,
},
});
const User = mongoose.model("User", userSchema);

module.exports = User;