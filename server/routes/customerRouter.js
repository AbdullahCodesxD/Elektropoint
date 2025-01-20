const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomer);

router.post("/", customerController.createCustomer);

router.patch("/:id", customerController.updateCustomer);

router.delete("/:id", customerController.deleteCustomer);

module.exports = router;

// Customer
// 1- Create ✅
// 2- Update ✅
// 3- Delete ✅
// 4- View Order History
