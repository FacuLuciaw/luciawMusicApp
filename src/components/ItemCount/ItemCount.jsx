import {useState} from 'react';
import '../ItemCount/itemCount.css'

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    function suma() {

        (count < stock)

        ? setCount(count + 1)

        : alert('Stock superado')

    }

    function resta() {

        (count > initial) && setCount(count - 1)

    }

    return (

    <>

        <div className='contador-container'>

            <button onClick={resta}>-</button>

            <span>{count}</span>

            <button onClick={suma}>+</button>

        </div>

        <div>

        <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>

        </div>

    </>

    )
}

export default ItemCount