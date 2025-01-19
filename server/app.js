const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

const errorController = require("./controllers/errorController");
const productRouter = require("./routes/productRouter");
const searchRouter = require("./routes/searchRouter");
const collectionRouter = require("./routes/collectionRouter");

dotenv.config({
  path: "./config.env",
});

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/search", searchRouter);
app.use("/api/v1/collection", collectionRouter);

app.use(errorController);
module.exports = app;
