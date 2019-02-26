const router = require("express").Router();
const articleRoutes = require("./routation");

// Book routes
router.use("/routation", articleRoutes);

module.exports = router;
