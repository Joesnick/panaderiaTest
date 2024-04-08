import express from "express";

import {
    obtenerProyects,
    newProyect,
    obtenerProyect,
    editProyect,
    deleteProyect,
    addColaborator,
    deleteColaborator,
    obtenerTareas
} from '../controllers/proyectController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route("/")
    .get(checkAuth, obtenerProyects)
    .post(checkAuth, newProyect);
    
router
    .route('/:id')
    .get(checkAuth, obtenerProyect)
    .put(checkAuth, editProyect)
    .delete(checkAuth, deleteProyect);

router.get('/tareas/:id', checkAuth, obtenerTareas);
router.post('/agregar-colaborador/:id', checkAuth, addColaborator);
router.delete('/eliminar-colaborador/:id', checkAuth, deleteColaborator);




export default router;