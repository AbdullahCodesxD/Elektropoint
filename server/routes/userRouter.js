const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post("/", userController.createNewUser);
router.post("/login", userController.login);

router.get(
  "/",
  authController.protect,
  authController.checkRole("admin"),
  userController.getAllUsers
);
router.get("/me", authController.protect, userController.getMe);

router.patch("/me", authController.protect, userController.updateCurrentUser);

module.exports = router;
