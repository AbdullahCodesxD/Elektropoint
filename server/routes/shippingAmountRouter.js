const express = require("express");
const router = express.Router();

const shippingAmountController = require("../controllers/shippingAmountController");
router.get("/", shippingAmountController.getAllShippingAmounts);
router.get("/:id", shippingAmountController.getShippingAmount);
router.get("/type/:type", shippingAmountController.getShippingAmountByType);
router.get("/price/:price", shippingAmountController.getShippingAmountByPrice);

router.post("/", shippingAmountController.createShippingAmount);

router.patch("/:id", shippingAmountController.updateShippingAmount);
router.delete("/:id", shippingAmountController.deleteShippingAmount);

module.exports = router;
