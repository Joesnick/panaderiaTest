import express from "express";
const router = express.Router();
import {register, 
        autenticar, 
        confirmar, 
        olvidePassword, 
        getUsers, 
        deleteUser,
        comprobarToken,
        nuevoPassword,
        perfil} from "../controllers/userController.js";

import checkAuth from "../middleware/checkAuth.js";

// Authentication, Registers and Users Confirmation
router.post('/', register); // Create New User
router.get('/', getUsers); // Get Created Users
router.delete('/:userId', deleteUser); // Delete User
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

router.get('/perfil', checkAuth, perfil);


export default router;
