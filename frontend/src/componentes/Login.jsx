import '../App.css'
import Navbar from './Navbar';
import panRegister from '../assets/img/pancito.png';
import panLogin from '../assets/img/pancito2.png';
import axios from 'axios';
import Alert from './Alert.jsx';


import { useState } from 'react';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alert, setAlert] = useState({})

    /*   const [formData, setFormData] = useState({
           name: '',
           username: '',
           email: '',
           password: '',
           confirmPassword: ''
       });
       const [passwordMatchError, setPasswordMatchError] = useState(false);
       name, 
   */
    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    /*    const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
    
             //Validar que las contraseñas coincidan en tiempo real
            if (name === 'confirmPassword') {
                setPasswordMatchError(value !== formData.password);
            } else if (name === 'password') {
                setPasswordMatchError(value !== formData.confirmPassword);
            }
        }; */

    const handleSubmit = async e => {
        e.preventDefault();
        // Validar que las contraseñas coincidan antes de enviar el formulario
        /* if (formData.password !== formData.confirmPassword) {
            setPasswordMatchError(true);
            return;
        }*/

        //Registrar

        if ([name, email, password, confirmPassword].includes('')) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if (password !== confirmPassword) {
            setAlert({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }

        if (password.lenght < 6) {
            setAlert({
                msg: 'El Password es muy corto, mínimo 6 caracteres',
                error: true
            })
            return
        }

        setAlert({})

        try {

            const { data } = await axios.post('http://localhost:8081/api/users', { 
                name, 
                username, 
                email, 
                password 
            })

            setAlert({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlert({});
                window.location.reload();
            }, 2000);

        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alert

    return (
        <div>
            < Navbar />
            <div className="login-background">
                <div className="login-container">
                    <div className="div">
                        <div className={`container is-desktop ${isSignUp ? 'active' : ''}`} style={{ marginTop: '30px', marginBottom: '30px' }}>
                            <div className="form-container sign-up">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="title is-size-2 has-text-bold has-text-black">Crear cuenta</h1>
                                    <img src={panRegister} alt="Pan-Register" />
                                    <input type="text" placeholder="Nombre" name="name" value={name} onChange={e => setName(e.target.value)} />
                                    <input type="text" placeholder="Nombre de Usuario" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                                    <input type="email" placeholder="Correo electrónico" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                                    <input type="password" placeholder="Contraseña" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    <input type="password" placeholder="Confirmar contraseña" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                    {msg && <Alert alert={alert} />}
                                    <button type="submit" style={{ backgroundColor: '#F88502' }} className="has-text-white">Registrarse</button>
                                </form>
                            </div>
                            <div className="form-container sign-in">
                                <form>
                                    <h1 className="title is-size-2 has-text-bold has-text-black">Iniciar sesión</h1>
                                    <img src={panLogin} alt="Pan-Login" />
                                    <input type="email" placeholder="Correo electrónico" />
                                    <input type="password" placeholder="Contraseña" />
                                    <a href="#" className="has-text-bold">¿Olvidaste tu contraseña?</a>
                                    <button style={{ backgroundColor: '#F88502' }} className=" has-text-white">Ingresar</button>
                                </form>
                            </div>
                            <div className="toggle-container">
                                <div className="toggle">
                                    <div className="toggle-panel toggle-left">
                                        <h1 className="title is-size-2">¡Bienvenido!</h1>
                                        <p className=" is-size-4">¿Ya tienes una cuenta? Pulsa el botón Iniciar sesión en la parte de abajo, de  lo contrario
                                            puedes crear tu cuenta llenando la información a tu derecha.
                                        </p>
                                        <button className={isSignUp ? " has-text-white" : 'hidden'} onClick={toggleForm} style={{ backgroundColor: '#F88502' }}>Iniciar sesión</button>
                                    </div>
                                    <div className="toggle-panel toggle-right">
                                        <h1 className="title is-size-2">¡Hola, te extrañábamos!</h1>
                                        <p className=" is-size-4">¿No tienes una cuenta? Puedes crearte una haciendo click en el botón Crear cuenta.
                                        </p>
                                        <button className={isSignUp ? 'hidden' : 'has-text-white'} onClick={toggleForm} style={{ backgroundColor: '#F88502' }}>Crear cuenta</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;