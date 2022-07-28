import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'

function CartForm({cart, totalCost, createBuyOrder, clearCart}) {



    const [buyer, setBuyer] = useState ({

        nombre: "",

        numero: "",

        email: ""

    })

    const handleChange = (evt) => {

        const field = evt.target.name;

        const value = evt.target.value;

        setBuyer ({

            ...buyer,

            [field]: value,

        })

    } 

function handleBuyOrder(evt){

    evt.preventDefault();

    const dataOrder = {

        buyer ,

        items: cart,

        total: totalCost(),

    }

    Swal.fire({
        timerProgressBar: true,
        title: 'Realizando compra',
        text: 'Procesando datos',
    })

createBuyOrder(dataOrder).then ( (orderDataCreated) => {

    clearCart();

    Swal.fire({
        icon: 'success',
        title: 'Compra procesada',
        footer: 'Compra: ' + orderDataCreated.id,
    })

})    

}  

    return (

    <form>

        <label htmlFor="username">Usuario</label>
        <input onChange={handleChange} name="nombre"/>

        <label htmlFor="phone">Telefono</label>
        <input onChange={handleChange} name="numero"/>

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} name="email"/>

        <button onClick={handleBuyOrder}>Finalizar Compra</button>

    </form>

    )
}

export default CartForm