import express from "express";
const router = express.Router();
import { addComment } from "../controllers/commentsController.js";
import { getComments } from "../controllers/commentsController.js";
import { deleteComment } from "../controllers/commentsController.js";

// Adding Comments
router.post('/', addComment); // Create New Comment
router.get('/', getComments); // Get Created Comments
router.delete('/:commentId', deleteComment); // Delete Commentss

export default router;