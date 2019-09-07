const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    }

}, {
    timestamps: false,
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;


