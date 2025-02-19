const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrder);

router.post("/", orderController.createOrder);
router.post("/fullfill/:id", orderController.fullfillOrder);

router.patch("/:id", orderController.updateOrder);

router.delete("/:id", orderController.deleteOrder);
module.exports = router;
