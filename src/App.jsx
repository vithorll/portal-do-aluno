import Header from "./components/Header.jsx";
import RedacaoCard from "./components/RedacaoCard.jsx";
import { REDACOES } from "./dados.js";
import "./estilo.css";

export default function App() {
  return (
    <div className="pagina">
      <Header />

      {/* TODO: percorra REDACOES com .map e renderize um <RedacaoCard>
          para cada redação, passando-a por props. Não esqueça a key. */}

      {REDACOES.map(r => <RedacaoCard key={r.id} redacao={r}/>)}  

    </div>
  );
}
