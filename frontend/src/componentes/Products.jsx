import PropTypes from "prop-types";
import '../App.css'

const Products = ({ product }) => {
  return (
    <section className="mx-6">
      <div>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={product.imagen} alt={product.nombre} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{product.nombre}</p>
                <p className="subtitle is-4">{product.precio}</p>
              </div>
            </div>
            <div className="content is-size-5">
              {product.descripcion}
              <br />
              <button className="button has-text-white has-text-weight-bold" style={{'background-color': '#F88502'}}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    precio: PropTypes.string,
    descripcion: PropTypes.string,
  }).isRequired,
};

export default Products;



