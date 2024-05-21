import { useState } from 'react';
import axios from 'axios';
import Alert from '../componentes/Alert';
import { useParams } from 'react-router-dom';
import Navbar from '../componentes/Navbar';
import backgroundImage from '../assets/img/panFondoLogin.jpg';

const NuevoPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ error: false, msg: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8081/api/users/olvide-password/${token}`, { password });
            setAlert({ error: false, msg: response.data.msg });
        } catch (error) {
            setAlert({ error: true, msg: error.response.data.msg });
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
                }}>
                <Navbar />
                <div className="nuevo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <div className="nuevo-container p-4" style={{ maxWidth: '600px', borderRadius: '8px', backgroundColor: '#a0522d' }}>
                        <h1 className="title is-1 has-text-white has-text-weight-bold">
                            Reestablece tu <span className="has-text-white">Password</span>
                        </h1>
                        <form className="box has-background-white-ter" onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label has-text-black is-size-2" htmlFor="password">
                                    Nuevo Password
                                </label>

                                {alert.msg && <Alert alert={alert} />}

                                <div className="control">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Escribe tu Nuevo Password"
                                        className="input has-background-white-ter has-text-black"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        type="submit"
                                        className="button is-primary is-fullwidth"
                                        value="Guardar Nuevo Password"
                                        style={{ backgroundColor: '#F88502' }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NuevoPassword;
