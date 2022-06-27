import { NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';

    export default function NavBar() {

        return ( 

            <div className="div-navBar">

                <nav className="nav-main">

                    <ul>

                        <li><NavLink to ="/">Inicio</NavLink></li>

                        <li><NavLink to ="/ropa">Ropa</NavLink></li>

                        <li><NavLink to ="/category/Remera">Remeras</NavLink></li>

                        <li><NavLink to ="/category/Camiseta">Camisetas</NavLink></li>

                        <CartWidget/>

                    </ul>

                </nav>

            </div>

        );

    }
