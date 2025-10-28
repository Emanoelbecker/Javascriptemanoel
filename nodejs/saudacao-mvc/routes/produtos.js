const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const siteController = require("../controllers/siteController");

router.get("/", produtoController.produtos);
router.get("/cadastrar", produtoController.formcod);
router.post("/cadastrar", produtoController.cadastrar);

module.exports = router;
