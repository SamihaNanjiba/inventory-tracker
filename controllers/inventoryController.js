const asyncHandler = require("express-async-handler");
const Inventory = require("../models/inventoryModel");

//@desc     Get inventories
//@route    GET /api/inventories
//@access   Public
const getInventories = asyncHandler(async (req, res) => {
  // returns all items
  // const inventories = await Inventory.find();

  // returns the items that are not deleted when is_deleted: false,
  // if is_deleted:true, returns deleted items
  let filters = {
    is_deleted: req.query.is_deleted,
  };
  const inventories = await Inventory.find(filters);
  res.status(200).json(inventories);
});

//@desc     Set inventory
//@route    POST /api/inventories
//@access   Public
const setInventory = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please enter the name of the item");
  }
  if (!req.body.count) {
    res.status(400);
    throw new Error("Please enter the count of the item");
  }

  const inventory = await Inventory.create({
    name: req.body.name,
    count: req.body.count,
    description: req.body.description,
    is_deleted: req.body.is_deleted,
    deletion_comment: req.body.deletion_comment,
  });
  res.status(200).json(inventory);
});

//@desc     Update inventory
//@route    PUT /api/inventories/:id
//@access   Public
const updateInventory = asyncHandler(async (req, res) => {
  console.log(req.params);
  const inventory = await Inventory.findById(req.params.id);
  if (!inventory) {
    res.status(400);
    throw new Error("inventory not found");
  }

  const updatedInventory = await Inventory.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(200).json(updatedInventory);
});

// For Hard delete
//@desc     Delete inventory
//@route    DELETE /api/inventories/:id
//@access   Public
const deleteInventory = asyncHandler(async (req, res) => {
  const inventory = Inventory.findById(req.params.id);

  if (!inventory) {
    res.status(400);
    throw new Error("inventory not found");
  }

  // Hard delete
  const deletedInventory = await inventory.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedinventory);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getInventories,
  setInventory,
  updateInventory,
  deleteInventory,
};
