const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

const errorController = require("./controllers/errorController");
const productRouter = require("./routes/productRouter");
const searchRouter = require("./routes/searchRouter");
const collectionRouter = require("./routes/collectionRouter");
const customerRouter = require("./routes/customerRouter");
const orderRouter = require("./routes/orderRouter");
const discountRouter = require("./routes/discountRouter");
const storeRouter = require("./routes/storeRouter");
const shippingRouter = require("./routes/shippingAmountRouter");
const userRouter = require("./routes/userRouter");
const taxesRouter = require("./routes/taxesRouter");
const adminDashboardHome = require("./routes/adminDashboardHome");
dotenv.config({
  path: "./config.env",
});

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/search", searchRouter);
app.use("/api/v1/collection", collectionRouter);
app.use("/api/v1/customer", customerRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/discounts", discountRouter);
app.use("/api/v1/stores", storeRouter);
app.use("/api/v1/shippingAmount", shippingRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/taxes", taxesRouter);
app.use("/api/v1/adminDashboard", adminDashboardHome);
app.use(express.static("uploads"));
app.use(errorController);
module.exports = app;

// Product
// 1- Create
// 2- Delete
// 3-Update
// 4- View
// 5- Assign Categories
// 5- Change status like draft or active

// Collection
// 1- Create
// 2- Update
// 3- Delete
// 4- Assign Products
// 5- Change status

// Order
// 1- Customers Created
// 2- Linked with customer Profile
// 3- link with Product
// 4- Delete
// 5- Update

// Customer
// 1- Create
// 2- Update
// 3- Delete
// 4- View Order History
