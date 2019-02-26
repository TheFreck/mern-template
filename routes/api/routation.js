const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .post(controller.create)
  .put(controller.update);

router.route("/:query")
  .get(controller.find)
  .delete(controller.remove);


module.exports = router;
