import ItemCount from "../ItemCount/ItemCount"
import '../ItemDetail/itemDetail.css'

export const ItemDetail = ({item}) => {

    return (

        <section className='container-detail-item'>

            <img src={item.foto} alt="img" />

            <div className="info-detail-item">

                <h2 className='nombre-detail-item'>{item.nombre}</h2>

                <p className='precio-detail-item'>${item.precio}</p>

                <p className='desc-detail-item'>{item.descripcion}</p>

                <ItemCount stock={10} initial={1} />

            </div>

        </section>

    )
}
