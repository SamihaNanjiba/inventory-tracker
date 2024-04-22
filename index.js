const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const corsOptions = require("./config/corsOptions").default;
connectDB();

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use("/api/inventory", require("./routes/inventoryRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
