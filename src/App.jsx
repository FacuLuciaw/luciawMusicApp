import logoImg from './img/logofacu.png';
import NavBar from './components/NavBar/NavBar';
import './App.css';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 className='h1-titulo'> Bienvenidos a LuciawMusicApp </h1>
        <img alt="logo" src={ logoImg } />
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
