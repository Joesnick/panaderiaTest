import Proyect from "../models/Proyect.js";

const getProyects = async (req, res) => {
    const proyects = await Proyects.find().where('creator').equals(req.user);

    res.json(proyects);

};

const newProyect = async (req, res) => {
    const proyect = new Proyects(req.body);
    proyect.creator = req.user._id;
    try {
        const storedProyect = await proyect.save();
        res.json(storedProyect);
    } catch (error) {
        console.log(error);
    }

};

const getProyect = async (req, res) => {
    const { id } = req.params;

    const proyect = await Proyects.findById(id);

    console.log(proyect);
    if (!proyect) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: "Acción No Valida " });
    }
    if (proyect.creator.toString() !== req.user._id.toString()) {
        const error = new Error("Acción no Valida");
        return res.status(401).json({ msg: error.message });
    }

    res.json(proyect);

};

const editProyect = async (req, res) => {
    const { id } = req.params;

    const proyect = await Proyects.findById(id);

    console.log(proyect);
    if (!proyect) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: "Acción No Valida " });
    }
    if (proyect.creator.toString() !== req.user._id.toString()) {
        const error = new Error("Acción no Valida");
        return res.status(401).json({ msg: error.message });
    }

    proyect.name = req.body.name || proyect.name;
    proyect.description = req.body.description || proyect.description;
    proyect.deadline = req.body.deadline || proyect.deadline;
    proyect.client = req.body.client || proyect.client;

    try {
        const proyectStored = await proyect.save();
        res.json(proyectStored);
    } catch (error) {
        console.log(error);
    }

};

const deleteProyect = async (req, res) => {
    const { id } = req.params;

    const proyect = await Proyects.findById(id);

    console.log(proyect);
    if (!proyect) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: "Acción No Valida " });
    }
    if (proyect.creator.toString() !== req.user._id.toString()) {
        const error = new Error("Acción no Valida");
        return res.status(401).json({ msg: error.message });
    }

    try {
        await proyect.deleteOne();
        res.json({ msg: "Proyecto Eliminado" });
    } catch (error) {
        console.log(error);
    }
};

const addColaborator = async (req, res) => {};

const deleteColaborator = async (req, res) => {};

const getTasks = async (req, res) => {};


export {
    getProyects,
    newProyect,
    getProyect,
    editProyect,
    deleteProyect,
    addColaborator,
    deleteColaborator,
    getTasks
};