import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" style={{fontSize: '20px' , borderBotton: '1px solid red'}}>
    <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hola</code> 
        </p>
        <ButtonComponent/>
      </header>
    </div>
  );
}
const ButtonComponent = () => {
const mostrarAlerta = () => {

}

return <button onClick={mostrarAlerta}>hola</button>
 }
export default App;

