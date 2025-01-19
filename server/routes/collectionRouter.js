const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionController");

router.post("/", collectionController.createCollection);

router.get("/", collectionController.getAllCollections);
router.get("/:slug", collectionController.getCollectionBySlug);
router.delete("/:collection", collectionController.deleteCollection);

module.exports = router;
