import ItemCount from "../ItemCount/ItemCount"
import '../Item/item.css'

export const ItemDetail = ({item}) => {

    return (

        <section className='container-item'>

            <img src={item.foto} alt="img" />

            <div className="info-item">

                <h2 className='nombre-item'>{item.nombre}</h2>

                <p className='precio-item'>${item.precio}</p>

                <p className='desc-item'>{item.descripcion}</p>

                <ItemCount stock={10} initial={1} />

            </div>

        </section>

    )
}
