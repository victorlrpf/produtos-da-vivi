import { useEffect, useRef } from 'react'
import ProductArt from './ProductArt'

const formatPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProdutoModal({ produto, onClose, onEncomendar }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!produto) return null

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={dialogRef}
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <div className="modal-grid">
          <div className="modal-art">
            <ProductArt cor={produto.corDestaque} padrao={produto.padrao} nome={produto.nome} />
          </div>
          <div className="modal-info">
            <p className="eyebrow">{produto.categoria}</p>
            <h3 id="modal-title">{produto.nome}</h3>
            <p className="modal-preco">{formatPreco(produto.preco)}</p>
            <p className="modal-descricao">{produto.descricaoLonga}</p>
            <ul className="modal-detalhes">
              {produto.detalhes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="btn btn-primary" onClick={() => onEncomendar(produto)}>
              Encomendar este produto
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(46, 31, 43, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-sm);
          z-index: 50;
        }
        .modal-panel {
          background: var(--color-bg);
          max-width: 760px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid var(--color-line);
        }
        .modal-close {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          background: transparent;
          border: none;
          font-size: 2rem;
          line-height: 1;
          color: var(--color-plum);
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .modal-art {
          aspect-ratio: 4 / 3;
        }
        .modal-info {
          padding: var(--space-md);
        }
        .modal-info h3 {
          font-size: 1.6rem;
          margin-top: 0.3rem;
        }
        .modal-preco {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--color-wine);
          margin-top: 0.4rem;
        }
        .modal-descricao {
          margin-top: var(--space-sm);
          color: var(--color-ink-soft);
        }
        .modal-detalhes {
          margin: var(--space-sm) 0 var(--space-md);
          padding-left: 1.1rem;
          color: var(--color-ink-soft);
          font-size: 0.92rem;
        }
        .modal-detalhes li + li {
          margin-top: 0.3rem;
        }
        @media (max-width: 620px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-art {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  )
}
