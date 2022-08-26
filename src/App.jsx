
import './App.css';
import Navbar from './components/Navbar/navbar';
import Title from './components/Text/tittle';
import ItemListContainer from './components/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Car from './components/Navbar/car.svg'



function App() {
  return (
    <div className="App" style={{fontSize: '20px' , borderBotton: '1px solid red'}}>
    <Navbar/>
      <Title/>
      <ItemListContainer/>
        <ButtonComponent/>
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


