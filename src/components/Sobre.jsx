import { storeConfig } from '../config/store'

export default function Sobre() {
  return (
    <section id="sobre" className="section section-alt">
      <div className="container sobre-grid">
        <div>
          <p className="eyebrow">Sobre nós</p>
          <h2 className="section-heading">Feito à mão, peça por peça</h2>
        </div>
        <div className="sobre-text">
          <p>
            A {storeConfig.nome} nasceu da vontade de transformar tecido e linha em coisas que
            as pessoas guardam com carinho. Começamos bordando toalhas para a família e hoje
            fazemos bordados personalizados, toucas, fronhas e lençóis de cetim para quem
            valoriza um acabamento bem cuidado.
          </p>
          <p>
            Cada encomenda é conferida à mão antes de sair do ateliê — da escolha da linha até
            o último ponto. Trabalhamos com prazos claros e mantemos contato direto com você
            durante toda a produção.
          </p>
        </div>
      </div>
      <style>{`
        .sobre-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: var(--space-lg);
          align-items: start;
        }
        .sobre-text p {
          color: var(--color-ink-soft);
          font-size: 1.02rem;
        }
        .sobre-text p + p {
          margin-top: 1rem;
        }
        @media (max-width: 760px) {
          .sobre-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
