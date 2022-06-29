import { CartContext } from '../../context/CartContext';
import WidgetCarrito from '../../img/carrito.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (

        <div >

        <Link to='/cart'>

            <div>

                <li> <img src={WidgetCarrito} alt="Carrito" /> </li>

                { getQuantity() }

            </div>

        </Link>

    </div>

    )
}


export default CartWidget 
