const router = require("express").Router();
const userController = require("../../controllers/userController");
// import our dependencies and route the path to the controller
router.route("/")
    .get(userController.getUsers)

router.route("/:id")
    .put(userController.updateIfStudiedTopic);

module.exports = router;