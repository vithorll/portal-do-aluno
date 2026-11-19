export default function RedacaoCard({ redacao }) {
  return (
    <div className="card">
      <strong>{redacao.tema}</strong>
      {redacao.status === "corrigida"
        ? <span className="badge ok">Corrigida · {redacao.nota}</span>
        : <span className="badge pend">Em correção</span>}
    </div>
  );
}
