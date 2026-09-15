export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Ateliê de bordados e cetim</p>
          <h1>
            Cada peça carrega
            <br />
            um nome, um ponto, uma história.
          </h1>
          <p className="hero-text">
            Bordamos toalhas e necessaires sob medida e costuramos toucas, fronhas e lençóis
            de cetim para quem cuida dos detalhes — do seu jeito, com o seu nome.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#produtos">
              Ver produtos
            </a>
            <a className="btn btn-outline" href="#encomendas">
              Fazer encomenda
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            <circle cx="150" cy="150" r="118" fill="none" stroke="#6B2D42" strokeWidth="1.4" strokeDasharray="3 7" opacity="0.6" />
            <circle cx="150" cy="150" r="90" fill="#efe1d9" opacity="0.7" />
            <path
              d="M90 150 Q120 100 150 150 T210 150"
              fill="none"
              stroke="#4A2545"
              strokeWidth="2.2"
            />
            <path
              d="M90 165 Q120 200 150 165 T210 165"
              fill="none"
              stroke="#C9A15A"
              strokeWidth="2.2"
            />
          </svg>
        </div>
      </div>
      <div className="stitch-divider" />
      <style>{`
        .hero-inner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: var(--space-lg);
          align-items: center;
          padding-top: var(--space-xl);
          padding-bottom: var(--space-xl);
        }
        .hero-copy h1 {
          font-size: clamp(2.2rem, 4.4vw, 3.6rem);
          margin-top: 0.6rem;
        }
        .hero-text {
          margin-top: var(--space-sm);
          max-width: 46ch;
          color: var(--color-ink-soft);
          font-size: 1.08rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-top: var(--space-md);
          flex-wrap: wrap;
        }
        .hero-art {
          max-width: 340px;
          margin: 0 auto;
        }
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-art {
            order: -1;
            max-width: 220px;
          }
        }
      `}</style>
    </section>
  )
}
