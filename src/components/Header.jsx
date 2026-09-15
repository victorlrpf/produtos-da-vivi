import { useState } from 'react'
import { storeConfig } from '../config/store'

const LINKS = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#encomendas', label: 'Encomendas' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const prefixo = window.location.pathname === '/' ? '' : '/'
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href={`${prefixo}#topo`} className="brand">
          {storeConfig.nome}
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuAberto}
          aria-controls="navegacao-principal"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="visually-hidden">Abrir menu</span>
          {menuAberto ? '×' : '☰'}
        </button>
        <nav id="navegacao-principal" className={menuAberto ? 'menu-aberto' : ''} aria-label="Navegação principal">
          <ul className="nav-list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={`${prefixo}${link.href}`} onClick={() => setMenuAberto(false)}>{link.label}</a>
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
        .menu-toggle {
          display: none;
          border: 1px solid var(--color-line);
          background: transparent;
          color: var(--color-plum);
          font-size: 1.5rem;
          line-height: 1;
          padding: 0.4rem 0.65rem;
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
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .menu-toggle { display: block; margin-left: auto; }
          .site-header nav { display: none; width: 100%; }
          .site-header nav.menu-aberto { display: block; }
          .nav-list {
            flex-direction: column;
            gap: 0;
            padding: 0.5rem 0;
          }
          .nav-list li { border-top: 1px solid var(--color-line); }
          .nav-list a { display: block; padding: 0.7rem 0; }
          .brand { font-size: 1.25rem; }
          }
        }
      `}</style>
    </header>
  )
}
