const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
const questController = require("../../controllers/questionController");
// Matches with "/api/books"
router.route("/")
  .get(questController.findAll);
//   .post(booksController.create);

router.route('/:topic')
  .get(questController.findByTopic);
  


module.exports = router;
