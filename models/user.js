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
    default: false
},

flashcardHTML: {
    type: Boolean,
    default: false
},

flashcardJS: {
    type: Boolean,
    default: false
},

});

const User = mongoose.model("User", userSchema);

module.exports = User;