import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    products,
  });
};

export const newProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    message: "Produto criado com sucesso",
    product,
  });
};

export const getProductbyID = async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("Produto não encontrado", 404));
  }

  res.status(200).json({
    product,
  });
};

export const updateProductbyID = async (req, res, next) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("Produto não encontrado", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: "Produto atualizado com sucesso",
    product,
  });
};

export const deleteProductbyID = async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("Produto não encontrado", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    message: "Produto deletado com sucesso",
  });
};
