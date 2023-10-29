import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import { useState } from 'react'
import RespostaForm from './components/RespostaForm';

function App() {

      // Variáveis Recebidas
      const[consumo, setConsumo] = useState()
      const[valor, setValor] = useState()

  return (
    <div className="App">
      <Nav/>
      <Form setConsumo={setConsumo} setValor={setValor}/>
      <RespostaForm consumo={consumo} valor={valor} />
    </div>
  );
}

export default App;
