import { storeConfig } from '../config/store'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{storeConfig.nome}</span>
        <span>
          © {ano} · {storeConfig.cidade}
        </span>
      </div>
      <style>{`
        .site-footer {
          border-top: 1px solid var(--color-line);
          padding: var(--space-md) 0;
          color: var(--color-ink-soft);
          font-size: 0.85rem;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </footer>
  )
}
