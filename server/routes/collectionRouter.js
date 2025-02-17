const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionController");

router.post(
  "/",
  collectionController.uploadCollectionImages,
  collectionController.createCollection
);
router.get("/home", collectionController.forHomePage);
router.post(
  "/upload",
  collectionController.uploadCollectionImages,
  (req, res) => {
    console.log("Files:", req.files); // Debug: should show an array of files
    console.log("Body:", req.body); // Debug: should show other form data
    res.json({ files: req.files });
  }
);

router.get("/", collectionController.getAllCollections);
router.get("/:slug", collectionController.getCollectionBySlug);

router.patch("/:collection", collectionController.updateCollection);
router.patch("/:collection/:productId", collectionController.assignProduct);
router.delete("/:collection", collectionController.deleteCollection);

module.exports = router;
