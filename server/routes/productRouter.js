const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post(
  "/",
  productController.uploadProductImages,
  productController.createNewProduct
);
router.get("/", productController.getAllProducts);
router.get("/product/vendors", productController.getAllVendors);

router.get("/:slug", productController.getProductBySlug);
router.get(
  "/collection/:collection",
  productController.getProductsByCollection
);

router.patch("/:id", productController.updateProduct);
router.patch(
  "/images/:id",
  productController.uploadProductImages,
  productController.updateImages
);
router.patch("/category/:id", productController.updateProductCategory);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
