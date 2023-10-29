function RespostaForm({consumo, valor}){

    // Calcula a quantidade de placas e arredonda
    const quantidadePlaca = consumo/22.5;
    const arredondado = Math.ceil(quantidadePlaca)
    // Valor Placa 22.5 KhW
    const valorPlaca = 290

    // Valor Investimento
    const investimento = arredondado*valorPlaca

    // Quantidade de meses para quitar as placas solares
    const final =  Math.ceil(investimento/valor)

    return( consumo && valor &&
      <div>
        <p>Seu investimento será: R${investimento} 
            <br/>
            Seu investimento será pago em: {final} meses</p> 
      </div>
    )
}




export default RespostaForm