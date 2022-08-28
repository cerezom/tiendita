import { useState } from "react";

export default function App(){
    const [ numero, setNumero] = useState(0)

    function aumentar() {
        setNumero( numero + 1)

    }
    function disminuir(){
        setNumero( numero - 1)
    }


    return <section>
        <div className="contein">
        <h1>Contador</h1>
        <p>{numero}</p>
        <button className="contein" onClick={disminuir}>-</button>
        <button className="contein" onClick={aumentar}>+</button>
        <button className="contein" onClick={aumentar}>Agregar al carrito</button>
        </div>
    </section>
}

    

    
    