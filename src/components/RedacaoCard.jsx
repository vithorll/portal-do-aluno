// TODO: receba a redação por props e mostre o tema e um badge.
// - mostre redacao.tema dentro de <strong>...</strong>
// - se redacao.status === "corrigida", mostre
//     <span className="badge ok">Corrigida · {redacao.nota}</span>
//   senão, mostre
//     <span className="badge pend">Em correção</span>

export default function RedacaoCard({ redacao }) {
  return (
    <div className="card">
      <strong>{redacao.tema}</strong>
      {redacao.status === "corrigida"
        ? <span className="badge ok"> Corrigida · {redacao.nota}</span>
      : <span className = "badge pend">Em correção</span>
      }
    </div>
  );
}
