const express = require("express");
const itemsController = require("../controller/itemsController");

const router = express.Router();

router.get("/", itemsController.getItems);
router.get("/members", itemsController.getGroupMembers);
router.put("/", itemsController.updateItem);
router.post("/", itemsController.addItem);
router.delete("/:student_id", itemsController.deleteItem);

module.exports = router;





