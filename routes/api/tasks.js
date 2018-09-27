const router = require("express").Router();
const hoursController = require("../../controllers/tasksController");

// Matches with "/api/books"
router.route("/")
  .get(hoursController.findAll)
  .post(hoursController.create);

  router.route("/:taskscompleted")
  .get(hoursController.findSome);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(hoursController.findById)
  .put(hoursController.update)
  .delete(hoursController.remove);

module.exports = router;
