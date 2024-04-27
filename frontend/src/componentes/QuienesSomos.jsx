import image from '../assets/img/bread.jpg'
import '../App.css'


const QuienesSomos = () => {
  return (
    
    <section className="section " style={{padding: '0'}} id='nosotros'>
      <div className="">
      <h2 className="title title-font is-size-2 has-text-white p-3 mt-4" style={{'background-color': '#8a7a70'}}>Quiénes Somos</h2>
        <div className="columns is-multiline is-vcentered is-centered ml-6">
          <div className="column is-5-desktop is-centered">
            <p className="is-size-3 has-text-left has-text-black" style={{ lineHeight: "2" }}>
            Somos una panadería apasionada por el arte de la panificación. 
            Nuestro compromiso es ofrecer productos frescos y deliciosos que se hornean con amor y cuidado. 
            Descubre el sabor auténtico en cada bocado y únete a nuestra familia panadera.
            </p>
          </div>
          <div className="column is-5-desktop">
            <figure className="image">
              <img
                src={image}
                alt="Bread picture"
                className=''
                style={{width: '650px'}}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;

