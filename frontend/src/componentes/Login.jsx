import '../App.css'
import contacto from '../assets/img/inicio.png'
import Google from '../assets/img/google.png'
import Facebook from '../assets/img/facebook.png'
import Navbar from './Navbar';



const Login = () => {
    return (

        <div>
            < Navbar />
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content" style={{ marginTop: '60px', marginBottom: '30px' }}>
                        <h2 className="title">Iniciar Sesión</h2>
                        <div className="login-image">
                            <img src={contacto} alt="Panadería" className="login-image" />
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="field">
                                    <label className="label">Nombre de Usuario</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Nombre de Usuario" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Contraseña</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="Contraseña" />
                                    </div>
                                </div>
                                <div className="field is-grouped is-justify-content-center">
                                    <div className="control">
                                        <button className="button is-primary has-text-weight-bold" style={{ backgroundColor: '#F88502' }}>Ingresar</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary has-text-weight-bold" style={{ backgroundColor: '#F88502' }}>Registrarse</button>
                                    </div>
                                </div>
                                <div className="reset-password-link">
                                    <a>¿Olvidaste tu contraseña?</a>
                                </div>
                                <div className="socials-row">
                                    <a href="#" title="Use Google">
                                        <img src={Google} alt="Google" />
                                        Ingresar con Google
                                    </a>
                                    <a href="#" title="Use Facebook">
                                        <img src={Facebook} alt="Facebook" />
                                        Ingresar con Facebook
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login