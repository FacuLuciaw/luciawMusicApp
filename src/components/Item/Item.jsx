import '../Item/item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({nombre, foto, precio, tipo}) => {

    return (

            <div className='container-item'>

                <h2 className='nombre-item'>{nombre}</h2>

                <img src={foto} alt="img" />

                <p className='precio-item'>${precio}</p>

                <ItemCount stock={10} initial={1} />

            </div>

    )
}

export default Item 