import Styles from './Formulario.module.css'
import { useState } from 'react'


function Form(){

    function Enviar(e){
        e.preventDefault()
        console.log(`Consumo: ${consumo} Kwh Valor: R$${valor}`)
        e.target.reset();

        const resultado = document.getElementById('resultado');

        const paragrafo = `
            <p>Consumo: ${consumo} Kwh Valor: R$${valor}</p>        
        `;

        resultado.innerHTML = paragrafo;
    }

      const[consumo, setConsumo] = useState()
      const[valor, setValor] = useState()

    return(
        <form className={Styles.Formulario} onSubmit={Enviar}>
            <div className={Styles.geral}>
                <div className={Styles.spec}>
                    <label htmlFor="name"> Consumo </label>
                    <input 
                    type="number" 
                    id="name" 
                    placeholder="KwH"
                    min="1"
                    onChange={(e) => setConsumo(e.target.value)}
                    />
                </div>
                <div className={Styles.spec}>
                    <label htmlFor="name"> Valor </label>
                    <input 
                    type="number" 
                    id="name" 
                    placeholder="R$"
                    min="1"
                    onChange={(e) => setValor(e.target.value)}
                    />
                </div>
            </div>
            
            <button>Enviar</button>
        </form>
    )
}

export default Form