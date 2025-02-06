const express = require("express");
const router = express.Router();
const taxesController = require("../controllers/taxesController");

router.get("/", taxesController.getAllTaxes);
router.get("/tax/:id", taxesController.getTax);
router.get("/active", taxesController.getActiveTaxes);

router.post("/", taxesController.createTaxes);

router.delete("/:id", taxesController.deleteTax);

router.patch("/:id", taxesController.updateTax);

module.exports = router;
