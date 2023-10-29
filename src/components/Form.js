import Styles from './Formulario.module.css'
import { useState } from 'react'


function Form(){

    function Enviar(e){
        e.preventDefault()

        const resultado = document.getElementById('resultado');

        if(consumo !== undefined && valor !== undefined){
            const paragrafo = `
                <p>Seu investimento será: R$${investimento} 
                <br/>
                Seu investimento será pago em: ${final} meses</p>        
            `;
            resultado.innerHTML = paragrafo;

            e.target.reset();
        }
    }



    // Variáveis Recebidas
      const[consumo, setConsumo] = useState()
      const[valor, setValor] = useState()

    // Calcula a quantidade de placas e arredonda
      const quantidadePlaca = consumo/22.5;
      const arredondado = Math.ceil(quantidadePlaca)
    // Valor Placa 22.5 KhW
      const valorPlaca = 290

    // Valor Investimento
      const investimento = arredondado*valorPlaca

    // Quantidade de meses para quitar as placas solares
      const final =  Math.ceil(investimento/valor)

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