import express from "express";
const router = express.Router();
import {register, 
        autenticar, 
        confirmar, 
        olvidePassword, 
        getUsers, 
        deleteUser} from "../controllers/userController.js";

// Authentication, Registers and Users Confirmation
router.post('/', register) // Create New User
router.get('/', getUsers) // Get Created Users
router.delete('/:userId', deleteUser) // Delete User
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', olvidePassword);

export default router
