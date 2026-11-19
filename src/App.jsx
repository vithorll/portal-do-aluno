import { useState } from "react";
import Header from "./components/Header.jsx";
import RedacaoCard from "./components/RedacaoCard.jsx";
import { REDACOES } from "./dados.js";
import "./estilo.css";

export default function App() {
  const [busca, setBusca] = useState(""); 
  const [filtro, setFiltro] = useState("todas");

  const visiveis = REDACOES.filter((r) => filtro === "todas" || r.status === filtro)
                           .filter((r) => r.tema.toLowerCase().includes(busca.toLowerCase()));
  
  return (
    <div className="pagina">
      <Header/>
        
      <input className = "busca"
             value = {busca} 
             onChange = {(e) => setBusca(e.target.value)}
             placeholder = "Buscar por tema..."
      />

      <div className = "filtros">
          <button className={filtro === "todas" ? "chip ativo" : "chip"} 
                  onClick={() => setFiltro("todas")}>Todas
          </button>

          <button className={filtro === "corrigida" ? "chip ativo" : "chip"} 
                  onClick={() => setFiltro("corrigida")}>Corrigida
          </button>

          <button className={filtro === "em_correcao" ? "chip ativo" : "chip"} 
                  onClick={() => setFiltro("em_correcao")}>Em correção
          </button>   
      </div>
          
      {visiveis.length === 0 ? (<p className="vazio">Nenhuma redação encontrada.</p>)
                             : (visiveis.map((r) => (<RedacaoCard key={r.id} redacao={r}/>)))
      }
    </div>
  );
}
