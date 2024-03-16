import backgroundPicture from '../assets/img/backPicture.jpg'
import '../App.css'

const Inicio = () => {
    return (

        <div className="hero is-fullheight">
            <img src={backgroundPicture} alt="Snow" style={{
                width: '100%',
                opacity: '0.8'
            }} />
            <div className="centered column is-4 is-offset-1">
                <h1 className='title title-font is-size-1 has-text-weight-bold is-text-black'>¡El sabor de la tradición!</h1>
                <p className='is-size-4 has-text-weight-semibold is-text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo nulla magnam? Possimus quibusdam, eveniet quia officiis accusamus voluptas necessitatibus quidem eos rerum non dolores? Ducimus reprehenderit cupiditate accusamus eos!</p>
            </div>
        </div> 
    );
};

export default Inicio;

