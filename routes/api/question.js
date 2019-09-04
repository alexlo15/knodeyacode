const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
const questController = require("../../controllers/questionController");

// Matches with "/api/books"
router.route("/")
  .get(questController.findAll);
//   .post(booksController.create);

router.route('/:topic')
  .get(questController.findByTopic);
  
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
