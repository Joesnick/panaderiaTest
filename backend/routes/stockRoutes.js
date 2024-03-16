import express from "express";
const router = express.Router();
import { addStock } from "../controllers/stockController.js";
import { getStock } from "../controllers/stockController.js";
import { deleteStock } from "../controllers/stockController.js";

// Authentication, Registers and Users Confirmation
router.post('/', addStock) // Create New Product on Stock
router.get('/', getStock) // Get Added Products from Stock
router.delete('/:stockId', deleteStock) // Delete Product from Stock

export default router
