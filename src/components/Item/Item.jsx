import { Link } from 'react-router-dom';
import '../Item/item.css'

const Item = ({id, nombre, foto, precio}) => {

const urlDetalle = `/item/${id}`

    return (

    <div className='grid-container'>

        <section className='container-item'>

            <div className='info-item'>

                <img src={foto} alt="img" />    

                <h2 className='nombre-item'>{nombre}</h2>

                <p className='precio-item'>${precio}</p>

                <Link to={urlDetalle}>

                    <button className='detalle-item'>Ver Detalle</button>

                </Link>

            </div>

        </section>

    </div>

    )

}

export default Item 