const router = require("express").Router();
// const bookRoutes = require("./books.js");
const quesRoutes = require("./question");
// const articleRoutes = require("./articles");
// const scrapeRoutes = require("./scrape");


router.use("/questions",quesRoutes);
// router.use("/articles", articleRoutes);
// router.use("/scrape", scrapeRoutes);

module.exports = router;
