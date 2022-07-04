import { CartProvider } from "./context/CartContext";
import NavBar from './components/NavBar/NavBar';
import Cart from "./components/Cart/Cart";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {

  return (

    <div className="App">

      <header className="App-header">

        <h1 className='h1-titulo'> Bienvenidos a LuciawMusicApp </h1>

        <CartProvider>

        <BrowserRouter>

          <NavBar/>

          <Routes>

            <Route path="/" element={<ItemListContainer greeting="Catalogo de productos"/>} />

            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria producto"/>}/>

            <Route path="/cart" element={<Cart/>} />

            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle producto"/>} />

          </Routes>

        </BrowserRouter>

        </CartProvider>

        </header>

    </div>

  );

}

export default App;
