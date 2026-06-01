import imagenFoto from './src/assets/Foto.jpg';

function PresentationCard(){
    let name = 'Julio'
    return(
       <div className="presentation-card">
        <img src={imagenFoto} alt='Avatar' className='avatar' />
        <h1>
            Hola soy { name } y estoy aprendiendo React
        </h1>

       </div>
    );

}

export default PresentationCard;