import generarId from "../helpers/generarId.js";
import User from "../models/User.js";
import generarJWT from '../helpers/generarJWT.js';

// register Async Function
const register = async (req, res) => {


    //Evitar registros duplicados
    const { email } = req.body;
    const existeUser = await User.findOne({ email });

    if (existeUser) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message })
    }
    try {
        const user = new User(req.body);
        user.token = generarId();
        await user.save();
        res.json({msg: 'Usuario creado correctamente, revisa tu Email para confirmar tu cuenta'});
    } catch (error) {
        console.log(error);
    }
};

// getUsers Async Function
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting users..');
    }
};

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
    const { email, password } = req.body;

    // Comprobar si el Usuario existe
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("El Usuario no existe");
        return res.status(404).json({ msg: error.message });
    }
    // Comprobar si el Usuario está confirmado
    if (!user.confirmated) {
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message });
    }
    // Comprobar el password
    if (await user.comprobarPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generarJWT(user._id),

        });
    } else {
        const error = new Error("Contraseña incorrecta");
        return res.status(402).json({ msg: error.message });
    }
};

const confirmar = async (req, res) => {
    const { token } = req.params;
  
    try {
      const user = await User.findOne({ token });
  
      if (!user) {
        const error = new Error('Token no válido');
        return res.status(404).json({ msg: error.message });
      }
  
      if (user.confirmated) {
        return res.status(400).json({ msg: 'Usuario ya confirmado' });
      }

      user.confirmated = true;
      user.token = '';
      await user.save();

      return res.status(200).json({ msg: 'Usuario confirmado correctamente' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Hubo un error' });
    }
};

const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("Usuario no válido o no existe");
        return res.status(402).json({ msg: error.message });
    }
    try {
        user.token = generarId();
        await user.save();
        res.json({ msg: "Hemos enviado un email con las instrucciones" });
    } catch (error) {
        console.log(error);
    }
};

const comprobarToken = async (req, res) => {
    const { token } = req.params;

    const tokenValido = await User.findOne({ token });
    if (tokenValido) {
        res.json({ msg: "Token válido y el usuario existe" });
    } else {
        const error = new Error("El token no es válido");
        return res.status(402).json({ msg: error.message });
    }

};

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({ token });
    if (user) {
        user.password = password;
        user.token = "";

        try {
            await user.save();
            res.json({ msg: "Contraseña modificada correctamente" });
        } catch (error) {
            console.log(error);
        }
    } else {
        const error = new Error("El token no es válido");
        return res.status(402).json({ msg: error.message });
    }
};

const perfil = (req, res) => {
    const { user } = req;

    res.json(user);
};

// module.exports = router;

export { register, autenticar, getUsers, deleteUser, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil };