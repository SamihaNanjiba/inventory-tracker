const express = require("express");
const router = express.Router();
const {
  getInventories,
  setInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/InventoryController");

router.get("/", getInventories);
router.post("/", setInventory);

router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

module.exports = router;
