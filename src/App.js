import logoImg from './img/logofacu.png';
import NavBar from './components/NavBar/NavBar';
import './App.css';


function App() {

  const stylesH1 = {
    color: "cyan",
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1 style={stylesH1}> Bienvenidos a LuciawMusicApp </h1>
        <img alt="logo" src={ logoImg } />
        <p>Bienvenidos a LuciawMusicApp</p>

      </header>
    </div>
  );
}

export default App;
