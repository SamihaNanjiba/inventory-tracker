const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.INVENTORY_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline); //.cyan.underline from colors package
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
