const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");
// import our dependencies and route the path to the controller
router.route("/")
    .get(scoreController.findAll);
router.route("/")
    .post(scoreController.saveScore)

module.exports = router;