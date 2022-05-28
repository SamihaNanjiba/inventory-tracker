const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please set a name for the item"],
    },

    count: {
      type: Number,
      require: [true, "Please specify the count of the item"],
    },
    description: String,
    is_deleted: {
      type: Boolean,
      require: [true, "Please add the status of the item"],
    },
    deletion_comment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
