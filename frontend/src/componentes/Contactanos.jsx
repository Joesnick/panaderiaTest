import '../App.css'
import Weather from './Weather';


const Contactanos = () => {

    return (

        <div className="contact-us-section has-text-white mt-5" style={{ backgroundColor: '#8a7a70' }} id='contactanos'>

            <div className="columns is-vcentered ml-6">
                <div className="column is-6">
                    <div className="box" style={{ margin: '0 20px' }}>
                        <h2 className="title is-2 has-text-centered">Contáctenos</h2>
                        <form>
                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label is-size-5">
                                        Nombre <span className="required">*</span>
                                    </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Tu nombre" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label is-size-5">
                                        Mail <span className="required">*</span>
                                    </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="email" placeholder="tucorreo@ejemplo.com" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label is-size-5">Mensaje</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Escribe tu mensaje aquí" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field is-grouped is-grouped-right">
                                <div className="control">
                                    <button className="button is-primary has-text-weight-bold" style={{ backgroundColor: '#F88502' }}>
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="column is-vcentered">
                    < Weather />
                </div>
            </div>
        </div>

    );
};

export default Contactanos;