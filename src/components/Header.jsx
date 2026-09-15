import { storeConfig } from '../config/store'

const LINKS = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#encomendas', label: 'Encomendas' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const prefixo = window.location.pathname === '/' ? '' : '/'

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href={`${prefixo}#topo`} className="brand">
          {storeConfig.nome}
        </a>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={`${prefixo}${link.href}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 30;
          background: rgba(247, 243, 238, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--color-line);
        }
        .site-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.1rem;
          padding-bottom: 1.1rem;
        }
        .brand {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--color-plum);
          text-decoration: none;
        }
        .nav-list {
          list-style: none;
          display: flex;
          gap: 1.75rem;
          margin: 0;
          padding: 0;
        }
        .nav-list a {
          text-decoration: none;
          font-size: 0.95rem;
          color: var(--color-ink);
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }
        .nav-list a:hover {
          border-bottom-color: var(--color-wine);
        }
        @media (max-width: 640px) {
          .site-header-inner {
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
          }
          .nav-list {
            gap: 1rem;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </header>
  )
}
