const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionController");

router.post("/", collectionController.createCollection);

router.get("/", collectionController.getAllCollections);
router.get("/:slug", collectionController.getCollectionBySlug);

router.patch("/:collection", collectionController.updateCollection);
router.patch("/:collection/:productId", collectionController.assignProduct);
router.delete("/:collection", collectionController.deleteCollection);

module.exports = router;
// Collection
// 1- Create ✅
// 2- Update ✅
// 3- Delete ✅
// 4- Assign Products ✅
// 5- Change status ✅
