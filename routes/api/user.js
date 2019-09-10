const router = require("express").Router();
const userController = require("../../controllers/userController");
// import our dependencies and route the path to the controller
router.route("/")
    .get(userController.getUsers)
    .post(userController.saveUser)

router.route("/:name")
    .get(userController.findUser);

// router.route("/:email")
//     .put(userController.saveUser);

module.exports = router;