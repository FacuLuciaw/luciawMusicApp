import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'; 
import "../Cart/cart.css";

const Cart = () => {

    const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);

    if (cart.length === 0) {

        return (

            <>

            <div>

                <h1>El carrito esta vacio</h1>
                <Link to="/">Volver al Inicio</Link>

            </div>

            </>

)

    }

    return (

        <div>

    {

        cart.map((item) => (

        <div className='cart'>

            <h1>{item.nombre}</h1>

            <img src={item.foto} alt="img" />

            <p>${item.precio}</p>

            <button onClick={()=>{removeItem(item.id)}}>X</button>

            <p>Cantidad: {item.qty}</p>

        </div>

        ))

    };

        <p>Total de la compra: ${totalCost()}</p>

        <button onClick={clearCart}>Vaciar Carrito</button>

        <button>Comprar</button>

    </div>

    )

}

export default Cart