const express = require("express");
const router = express.Router();

const discountController = require("../controllers/discountController");

router.get("/", discountController.getAllDiscounts);
router.get("/:id", discountController.getDiscount);

router.post("/", discountController.createDiscount);

router.patch("/:id", discountController.updateDiscount);
router.patch("/discount/:id", discountController.discountUsed);

router.delete("/:id", discountController.deleteDiscount);
module.exports = router;
