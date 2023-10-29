import Styles from './Formulario.module.css'

function Form({ setConsumo, setValor }){

    return(
        <form className={Styles.Formulario}>
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
        </form>
    )
}

export default Form