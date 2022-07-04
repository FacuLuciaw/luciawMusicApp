import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../CartWidget/cartWidget.css";


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (

        <div>

        <Link to='/cart'>

            <div>

                <li> <i class="bi bi-cart2"></i> </li>

                { getQuantity() }

            </div>

        </Link>

    </div>

    )
}


export default CartWidget 
