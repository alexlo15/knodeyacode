const router = require("express").Router();
// const bookRoutes = require("./books.js");
const quesRoutes = require("./question");

// Book routes
// router.use("/books", bookRoutes);
router.use("/questions",quesRoutes);

module.exports = router;
