import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import QuienesSomos from './componentes/QuienesSomos';
import Products from './componentes/Products';
import productsInfo from './productsData';
import Contactanos from './componentes/Contactanos';
import Login from './componentes/Login';
import Footer from './componentes/Footer';
import { AuthProvider } from './AuthContext.jsx';
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Inicio />
                <QuienesSomos />
                <section className="productos" id="productos">
                  <h2 className="title title-font is-size-2 has-text-white p-3 mt-4" style={{ backgroundColor: '#8a7a70' }}>
                    Nuestros productos
                  </h2>
                  <div className="columns is-multiline">
                    {productsInfo.map((product) => (
                      <div className="column is-3-desktop" key={product.id}>
                        <Products product={product} />
                      </div>
                    ))}
                  </div>
                </section>
                <Contactanos />
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
