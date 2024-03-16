import '../App.css'
import Facebook from '../assets/img/facebook.png'
import Instagram from '../assets/img/instagram.png'
import Linkedin from '../assets/img/linkedin.png'
import Youtube from '../assets/img/youtube.png'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container" style={{ marginBottom: '20px' }}>
                <div className="columns">
                    <div className="column">
                        <div className="opening-hours">
                            <h4 className="title is-4 has-text-warning">Horario de apertura</h4>
                            <p className='is-size-5'>Lunes a Viernes: 7:00 AM - 6:00 PM</p>
                            <p className='is-size-5'>Sábados y Domingos: 8:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="address">
                            <h4 className="title is-4 has-text-warning">Dirección</h4>
                            <p className='is-size-5'>Calle 40 # 6w - 20</p>
                            <p className='is-size-5'>Neiva, Huila</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="contact-info">
                            <h4 className="title is-4 has-text-warning">Información de contacto</h4>
                            <p className='is-size-5'>Teléfono: (123) 456-7890</p>
                            <p className='is-size-5'>Email: info@panderiadeliciosa.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <small className='is-size-5'>© Panadería deliciosa Ltd. <span id="year"></span>, Todos los derechos reservados</small>
                <h3 className="title has-text-warning has-text-weight-bold mt-6">Síguenos en Redes Sociales</h3>
                <span className='social-links'>
                    <a href="#" title="Instagram">
                        <img src={Instagram} alt='Instagram' style={{ verticalAlign: 'middle' }} />
                    </a>
                    <a href="#" title="Linkedin">
                        <img src={Linkedin} alt='Linkedin' style={{ verticalAlign: 'middle' }} />
                    </a>
                    <a href="#" title="Facebook">
                        <img src={Facebook} alt='Facebook' style={{ verticalAlign: 'middle' }} />
                    </a>
                    <a href="#" title="Youtube">
                        <img src={Youtube} alt='YouTube' style={{ verticalAlign: 'middle' }} />
                    </a>
                </span>
            </div>
        </footer>

    )
}

export default Footer