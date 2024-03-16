import express from "express";
const router = express.Router();
import {register} from "../controllers/userController.js";
import { getUsers } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";

// Authentication, Registers and Users Confirmation
router.post('/', register) // Create New User
router.get('/', getUsers) // Get Created Users
router.delete('/:userId', deleteUser) // Delete User
router.post('/login', autenticar);


export default router
