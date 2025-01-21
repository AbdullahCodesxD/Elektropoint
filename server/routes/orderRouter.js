const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);

router.post("/", orderController.createOrder);

router.patch("/:id", orderController.updateOrder);

router.delete("/:id", orderController.deleteOrder);
module.exports = router;
// Order
// 1- Customers Created ✅
// 2- Linked with customer Profile ✅
// 3- link with Product ✅
// 4- Delete ✅
// 5- Update ✅
