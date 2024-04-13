import express from "express";

import {
    getProyects,
    newProyect,
    getProyect,
    editProyect,
    deleteProyect,
    addColaborator,
    deleteColaborator,
    getTasks
} from '../controllers/proyectController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router
    .route("/")
    .get(checkAuth, getProyects)
    .post(checkAuth, newProyect);
    
router
    .route('/:id')
    .get(checkAuth, getProyect)
    .put(checkAuth, editProyect)
    .delete(checkAuth, deleteProyect);

router.get('/tarea/:id', checkAuth, getTasks);
router.post('/agregar-colaborador/:id', checkAuth, addColaborator);
router.delete('/eliminar-colaborador/:id', checkAuth, deleteColaborator);




export default router;