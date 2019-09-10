const router = require("express").Router();
// const bookRoutes = require("./books.js");
const quesRoutes = require("./question");
const scoreRoutes = require("./score");
const userRoutes = require("./user");
// const articleRoutes = require("./articles");
// const scrapeRoutes = require("./scrape");

router.use("/scores",scoreRoutes);
router.use("/questions",quesRoutes);
router.use("/users",userRoutes);
// router.use("/articles", articleRoutes);
// router.use("/scrape", scrapeRoutes);

module.exports = router;
