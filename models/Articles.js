var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// constructor for articles
var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	link: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	saved: {
		type: Boolean,
		default: false
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;