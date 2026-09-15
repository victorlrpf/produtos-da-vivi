import EncomendaFormulario from './EncomendaFormulario'

export default function EncomendaModal({ produto, onClose }) {
  if (!produto) return null

  return (
    <div className="encomenda-modal-backdrop" onMouseDown={onClose}>
      <div
        className="encomenda-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="encomenda-modal-titulo"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="encomenda-modal-fechar" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <p className="eyebrow">Encomenda</p>
        <h2 id="encomenda-modal-titulo">Monte seu pedido</h2>
        <EncomendaFormulario produtoInicial={produto} />
      </div>
      <style>{`
        .encomenda-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-sm);
          background: rgba(46, 31, 43, 0.55);
        }
        .encomenda-modal {
          position: relative;
          width: min(100%, 620px);
          max-height: 92vh;
          overflow-y: auto;
          padding: var(--space-md);
          background: var(--color-bg);
          border: 1px solid var(--color-line);
        }
        @media (max-width: 640px) {
          .encomenda-modal-backdrop { align-items: flex-end; padding: 0; }
          .encomenda-modal {
            max-height: 94vh;
            border-left: 0;
            border-right: 0;
            padding: 1rem;
          }
        }
        .encomenda-modal h2 { margin-top: 0.3rem; }
        .encomenda-modal .encomenda-form { margin-top: var(--space-sm); }
        .encomenda-modal-fechar {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          border: 0;
          background: transparent;
          color: var(--color-plum);
          font-size: 2rem;
          line-height: 1;
        }
      `}</style>
    </div>
  )
}
