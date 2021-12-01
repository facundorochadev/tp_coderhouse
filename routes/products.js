const express = require("express"); 
const ProductController = require('../controllers/products'); 
var router = express.Router();

router.get("/", ProductController.read);
router.post("/", ProductController.create);
router.get("/:id", ProductController.read);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);
router.delete("/all", ProductController.deleteAll);

module.exports = router;
