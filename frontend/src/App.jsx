import './App.css'
import Navbar from './componentes/Navbar'
import Inicio from './componentes/Inicio'
import QuienesSomos from './componentes/QuienesSomos'
import Products from './componentes/Products'
import productsInfo from './productsData'
import Contactanos from './componentes/Contactanos'
import Login from './componentes/Login'
// Routes - Mapping
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './componentes/Footer'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <Inicio />
              <QuienesSomos />
              <section className="productos" id='productos'>
                <h2 className="title title-font is-size-2 has-text-white p-3 mt-4" style={{ backgroundColor: '#8a7a70' }}>Nuestros productos</h2>
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
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
