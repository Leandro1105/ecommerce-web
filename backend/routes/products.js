import express from "express";
import {
  deleteProductbyID,
  getProductbyID,
  getProducts,
  newProduct,
  updateProductbyID,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/products").get(getProducts);

//Rota para apenas o admin criar produtos
router.route("/admin/products").post(newProduct);

//Rota para consultar produto por ID
router.route("/products/:id").get(getProductbyID);

//Rota para atualizar produto por ID
router.route("/products/:id").put(updateProductbyID);

//Rota para deletar produto por ID
router.route("/products/:id").delete(deleteProductbyID);
export default router;
