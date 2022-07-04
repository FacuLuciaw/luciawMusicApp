import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { useContext } from 'react'; 
import { Link } from "react-router-dom";
import '../ItemDetail/itemDetail.css'

export const ItemDetail = ({ item, stock }) => {

    const { addToCart } = useContext(CartContext)

    const [cant, setCant] = useState(0);

    const onAdd = (quantity) =>{

    setCant(quantity);

    addToCart( item, quantity );

    }

    return (

        <section className='container-detail-item'>

            <img src={item.foto} alt="img" />

            <div className="info-detail-item">

                <h2 className='nombre-detail-item'>{item.nombre}</h2>

                <p className='precio-detail-item'>${item.precio}</p>

                <p className='desc-detail-item'>{item.descripcion}</p>

                { (cant === 0)

                    ?<ItemCount onAdd={onAdd} stock={10} initial={1} />

                    :<Link to="/cart">Ir al Carrito</Link>

                }

            </div>

        </section>

    )
}
