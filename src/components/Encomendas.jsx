import EncomendaFormulario from './EncomendaFormulario'

export default function Encomendas() {
  return (
    <section id="encomendas" className="section section-alt">
      <div className="container encomendas-grid">
        <div>
          <p className="eyebrow">Encomendas</p>
          <h2 className="section-heading">Monte o seu pedido</h2>
          <p className="section-intro">
            Busque o produto pelo nome, escolha a quantidade e conte os detalhes (cor, tamanho, texto do bordado).
            Ao confirmar, a encomenda é aberta em uma conversa no WhatsApp com o ateliê.
          </p>
        </div>
        <EncomendaFormulario />
      </div>
      <style>{`
        .encomendas-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: var(--space-lg);
          align-items: start;
        }
        .encomenda-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          background: #fffaf5;
          border: 1px solid var(--color-line);
          padding: var(--space-md);
        }
        .campo {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.9rem;
        }
        .campo span {
          color: var(--color-ink-soft);
        }
        .campo select,
        .campo input,
        .campo textarea {
          font-family: var(--font-body);
          font-size: 0.98rem;
          padding: 0.65rem 0.75rem;
          border: 1px solid var(--color-line);
          background: var(--color-bg);
          color: var(--color-ink);
        }
        .encomenda-confirmacao {
          color: var(--color-wine);
          font-size: 0.9rem;
        }
        @media (max-width: 760px) {
          .encomendas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
