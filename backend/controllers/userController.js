import generarId from "../helpers/generarId.js";
import User from "../models/User.js";

// register Async Function
const register = async (req, res) => {


    //Evitar registros duplicados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message})
    }



    try {
        const user = new User(req.body);
        user.token = generarId();
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        console.log(error);
    }
}

// getUsers Async Function
const getUsers = async (req, res) => {
    try {
        const users = await User.find(); 
        res.json(users); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting users..');
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send('User Not Found!');
        }
        res.json(deletedUser); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Trying to Remove User');
    }
};

const autenticar = async (req, res) => {
    const { email, password} = req.body;

    // Comprobar si el usuario existe
    const user = await User.findOne({ email });
    if (!user){
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message })
    }
    // Comprobar si el usuario está confirmado
    if (!user.confirmado){
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message })
    }
    // Comprobar el password
    if (!user.password){
        const error = new Error("Contraseña incorrecta");
        return res.status(401).json({ msg: error.message })
    }
}

// module.exports = router;

export {register, autenticar}
export {getUsers}
export {deleteUser}