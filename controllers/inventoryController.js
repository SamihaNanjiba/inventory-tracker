const asyncHandler = require("express-async-handler");
const Inventory = require("../models/inventoryModel");

//@desc     Get inventories
//@route    GET /api/inventories
//@access   Public
const getInventories = asyncHandler(async (req, res) => {
  // returns all items
  // const inventories = await Inventory.find();

  // returns only the items that are not soft deleted
  const inventories = await Inventory.find({ is_deleted: false });

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
  if (!req.body.is_deleted) {
    res.status(400);
    throw new Error("Please enter the status of the item");
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
  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    res.status(400);
    throw new Error("inventory not found");
  }

  const updatedInventory = await Inventory.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  ); //new:true will create if it doesn't exist
  res.status(200).json(updatedInventory);
});

//@desc     Delete inventory
//@route    DELETE /api/inventories/:id
//@access   Public
const deleteInventory = asyncHandler(async (req, res) => {
  const inventory = Inventory.findById(req.params.id);

  if (!inventory) {
    res.status(400);
    throw new Error("inventory not found");
  }

  // const deletedInventory = await inventory.findByIdAndDelete(req.params.id);
  // res.status(200).json(deletedinventory);

  // Soft delete
  const deletedInventory = await inventory.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  // Hard delete
  // const deletedInventory = await inventory.remove();

  res.status(200).json({ id: req.params.id });
});

const restoreInventory = asyncHandler(async (req, res) => {
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

module.exports = {
  getInventories,
  setInventory,
  updateInventory,
  deleteInventory,
  restoreInventory,
};
