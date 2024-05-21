import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Alert from '../componentes/Alert';
import Navbar from '../componentes/Navbar';
import backgroundImage from '../assets/img/panFondoLogin.jpg';

const ConfirmarCuenta = () => {
  const { token } = useParams();
  const [alert, setAlert] = useState({});

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:8081/api/users/confirmar/${token}`;
        const { data } = await axios.get(url);
        setAlert({ msg: data.msg, error: false });
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Si el servidor devuelve un error de "Token no válido", mostramos un mensaje de éxito
          setAlert({ msg: 'Tu cuenta ya ha sido confirmada', error: false });
        } else {
          // Si hay un error diferente, mostramos un mensaje de error genérico
          setAlert({ msg: 'Hubo un error al confirmar la cuenta', error: true });
        }
      }
    };

    confirmarCuenta();
  }, [token]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }} >
      <Navbar />
      <div className="confirm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div className="confirm-container p-4" style={{ maxWidth: '600px', borderRadius: '8px', backgroundColor: '#a0522d' }}>
          <h1 className="title has-text-black has-text-weight-bold is-size-1">
            Confirmación de tu
            <span className="has-text-black"> Cuenta</span>
          </h1>
          <div className="mt-6">
            {alert.msg && <Alert alert={alert} />}
          </div>
        </div>
      </div>
    </div>
  );

};

export default ConfirmarCuenta;