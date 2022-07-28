import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { createBuyOrder } from '../../services/firestore';
import "../Cart/cart.css";
import CartForm from './CartForm';

const Cart = () => {

    const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);

    if (cart.length === 0) {

        return (

            <div className='alerta-carrito'>

                <h2>El carrito esta vacio</h2>

                <Link to="/"> <button type="button" class="btn btn-dark">Volver al inicio</button> </Link>

            </div>

        )

}

    return (

        <div className='container-cart'>

    {

        cart.map((item) => (

        <div className='info-cart'>

            <img src={item.foto} alt="img" />

            <h2>{item.nombre}</h2>

            <p>${item.precio}</p>

            <p>Cantidad: {item.qty}</p>

            <button type="button" class="btn btn-danger" onClick={()=>{removeItem(item.id)}}>Eliminar elemento</button>

        </div>

        ))

    }

        <span className='total-cart'>

            <p>Total de la compra: ${totalCost()}</p>

        </span>

        <CartForm cart={cart} totalCost={totalCost} clearCart={clearCart} createBuyOrder={createBuyOrder}/>

    </div>

    )

}

export default Cart