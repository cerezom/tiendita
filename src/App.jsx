import logo from './car.svg';
import './App.css';
import NavBarLightMode from './components/Navbar/NavBarLightMode';
import Title from './components/Text/tittle';
import ItemListContainer from './components/container/ItemListContainer';
import Cartwidget from './components/Navbar/Cartwidget';

function App() {
  return (
    <div className="App" style={{fontSize: '20px' , borderBotton: '1px solid red'}}>
    <NavBarLightMode/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Title/>
      <ItemListContainer/>
        <ButtonComponent/>
        <Cartwidget/>
      </header>
    </div>
  );
}
const ButtonComponent = () => {
const mostrarAlerta = () => {
const car = () => { 

}

}

return <button onClick={mostrarAlerta}>Click Aqui</button>
}
export default App;


