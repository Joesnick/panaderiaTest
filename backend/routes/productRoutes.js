import express from "express";
const router = express.Router();
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/productController.js";

// Routes for Products
router.post('/', createProduct); // Create New Product
router.get('/', getProducts); // Get All Products
router.delete('/:productsId', deleteProduct); // Delete Product
router.put('/:productsId', updateProduct); // Update Product

export default router;
