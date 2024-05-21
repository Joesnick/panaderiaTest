import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../componentes/Alert.jsx';
import Navbar from '../componentes/Navbar';
import backgroundImage from '../assets/img/panFondoLogin.jpg';

const OlvidePassword = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:8081/api/users/olvide-password', { email });
            setAlert({ msg: response.data.msg, error: false });
        } catch (error) {

            if (error.response && error.response.status === 404) {
                setAlert({ msg: 'El usuario no existe', error: true });
            } else {
                setAlert({ msg: 'Hubo un error al enviar las instrucciones', error: true });
            }
        }
    };

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }} >
                <Navbar />
                <div className="olvide" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <div className="olvide-container p-4" style={{ maxWidth: '800px', borderRadius: '8px', backgroundColor: '#a0522d' }}>
                        <h1 className="title is-1 has-text-white">Recupera tu acceso y no pierdas tu {''}
                            <span className="has-text-white">usuario</span></h1>

                        <form className="box has-background-white-ter" onSubmit={handleSubmit}>
                            <div className="field">
                                <label
                                    className="label has-text-black is-size-1"
                                    htmlFor="email"
                                >Email</label>

                                {alert.msg && <Alert alert={alert} />}

                                <div className="control">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email de Registro"
                                        className="input has-background-white-ter has-text-black"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        type="submit"
                                        value="Enviar Instrucciones"
                                        className="button is-fullwidth is-primary"
                                    />
                                </div>
                            </div>
                        </form>

                        <nav className='level'>
                            <div className='level-item has-text-centered'>
                                <Link
                                    className='is-block is-size-6 has-text-white'
                                    to="/login"
                                >¿No tienen una cuenta? Inicia Sesión</Link>
                            </div>
                            <div className='level-item has-text-centered'>
                                <Link
                                    className='is-block is-size-6 has-text-white'
                                    to="/login"
                                >¿No tienen una cuenta? Regístrate</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OlvidePassword;
