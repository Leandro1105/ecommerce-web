import express from "express";
import { getProducts, newProduct } from "../controllers/productController.js";7

const router = express.Router();

router.route("/products").get(getProducts);

//Rota para apenas o admin criar produtos
router.route("/admin/products").post(newProduct);

export default router;
