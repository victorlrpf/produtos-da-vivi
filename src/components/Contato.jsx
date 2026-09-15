import { useState } from 'react'
import { storeConfig } from '../config/store'
import { buildWhatsappLink } from '../utils/whatsapp'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const texto = nome ? `Olá, meu nome é ${nome}. ${mensagem}` : mensagem
    const link = buildWhatsappLink(storeConfig.whatsappNumero, texto)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="section">
      <div className="container contato-grid">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="section-heading">Vamos conversar</h2>
          <p className="section-intro">
            Dúvidas sobre um produto, prazos ou uma ideia diferente? Escreva sua mensagem — ela
            abre direto uma conversa no WhatsApp com o ateliê.
          </p>
          <ul className="contato-info">
            <li>{storeConfig.instagram}</li>
            <li>{storeConfig.email}</li>
            <li>{storeConfig.cidade}</li>
          </ul>
        </div>

        <form className="contato-form" onSubmit={handleSubmit}>
          <label className="campo">
            <span>Seu nome</span>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label className="campo">
            <span>Mensagem</span>
            <textarea
              rows={5}
              required
              placeholder="Escreva sua mensagem..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
      <style>{`
        .contato-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: var(--space-lg);
          align-items: start;
        }
        .contato-info {
          list-style: none;
          margin: var(--space-md) 0 0;
          padding: 0;
          color: var(--color-ink-soft);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .contato-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          background: var(--color-bg-alt);
          border: 1px solid var(--color-line);
          padding: var(--space-md);
        }
        .contato-form .campo {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.9rem;
        }
        .contato-form .campo span {
          color: var(--color-ink-soft);
        }
        .contato-form input,
        .contato-form textarea {
          font-family: var(--font-body);
          font-size: 0.98rem;
          padding: 0.65rem 0.75rem;
          border: 1px solid var(--color-line);
          background: var(--color-bg);
          color: var(--color-ink);
        }
        @media (max-width: 760px) {
          .contato-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
