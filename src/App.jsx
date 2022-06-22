import logoImg from './img/logofacu.png';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <h1 className='h1-titulo'> Bienvenidos a LuciawMusicApp </h1>

        <img alt="logo" src={ logoImg } />

        <BrowserRouter>

          <NavBar/>

          <Routes>

            <Route path="/" element={<ItemListContainer greeting="Catalogo de productos"/>} />
            
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria producto"/>}/>
            
            <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle producto"/>} />

          </Routes>

        </BrowserRouter>
      
      </header>
    
    </div>
  );
}

export default App;
