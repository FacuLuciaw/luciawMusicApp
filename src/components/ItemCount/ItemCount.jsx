import {useState} from 'react';
import '../ItemCount/itemCount.css'

function ItemCount({ stock, initial }) {

    const [count, setCount] = useState(initial);

    function suma() {
        if (count < stock) {
        setCount(count + 1)
        }
        
        else{
        alert('No hay mas stock')
        }
    }

    function resta() {
        if (count > initial) {
        setCount(count - 1)
        }
    }

    return (
        <div className='contador-container'>
            
            <button onClick={resta}>-</button>
            <span>{count}</span>
            <button onClick={suma}>+</button>
            
        </div>
    )
}

export default ItemCount