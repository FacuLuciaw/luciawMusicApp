import CartWidget from "../CartWidget";
import './navbar.css';
    
    export default function NavBar() {

        return ( 
            <div className="div-navBar">
                <nav className="nav-main">
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                        <CartWidget>
                            
                        </CartWidget>                       
                        
                    </ul>
                </nav>
            </div>
        );
    }