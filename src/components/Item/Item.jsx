import ItemCount from '../ItemCount/ItemCount'
import '../Item/item.css'
import { Link } from 'react-router-dom';

const Item = ({id, nombre, foto, precio}) => {

const urlDetalle = `/item/${id}`

    return (
 
        <section className='container-item'>

            <div className='info-item'>

                <img src={foto} alt="img" />    

                <h2 className='nombre-item'>{nombre}</h2>

                <p className='precio-item'>${precio}</p>

                <ItemCount stock={10} initial={1} />

                <Link to={urlDetalle}>
                    <button>Ver Detalle</button>
                </Link>

            </div>

        </section>

    )
}

export default Item 