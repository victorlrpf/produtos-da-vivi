import { useEffect, useState } from 'react'
import { fetchProductById } from '../data/products'
import ProductArt from './ProductArt'
import Header from './Header'
import Footer from './Footer'
import EncomendaModal from './EncomendaModal'

const formatPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProdutoPagina({ produtoId, onVoltar }) {
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [modalAberto, setModalAberto] = useState(false)

  useEffect(() => {
    let ativo = true
    fetchProductById(produtoId).then((resultado) => {
      if (ativo) {
        setProduto(resultado)
        setCarregando(false)
      }
    })
    return () => { ativo = false }
  }, [produtoId])

  return (
    <>
      <Header />
      <main className="produto-pagina">
        <div className="container">
          <button className="produto-voltar" onClick={onVoltar}>← Voltar para produtos</button>
          {carregando && <p className="produtos-status">Carregando produto...</p>}
          {!carregando && !produto && <p className="produtos-status">Produto não encontrado.</p>}
          {produto && (
            <article className="produto-detalhe">
              <div className="produto-detalhe-art">
                <ProductArt cor={produto.corDestaque} padrao={produto.padrao} nome={produto.nome} />
              </div>
              <div className="produto-detalhe-info">
                <p className="eyebrow">{produto.categoria}</p>
                <h1>{produto.nome}</h1>
                <p className="produto-detalhe-preco">{formatPreco(produto.preco)}</p>
                <p className="produto-detalhe-descricao">{produto.descricaoLonga}</p>
                <ul className="produto-detalhe-lista">
                  {produto.detalhes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <button className="btn btn-primary" onClick={() => setModalAberto(true)}>
                  Encomendar este produto
                </button>
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
      {modalAberto && <EncomendaModal produto={produto} onClose={() => setModalAberto(false)} />}
      <style>{`
        .produto-pagina { padding: var(--space-lg) 0 var(--space-xl); }
        .produto-voltar { background: none; border: 0; padding: 0; color: var(--color-wine); font: inherit; }
        .produto-detalhe { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--space-lg); margin-top: var(--space-md); align-items: start; }
        .produto-detalhe-art { aspect-ratio: 4 / 3; }
        .produto-detalhe-info { padding-top: var(--space-sm); }
        .produto-detalhe-info h1 { font-size: clamp(2rem, 4vw, 3.2rem); margin-top: 0.4rem; }
        .produto-detalhe-preco { color: var(--color-wine); font-family: var(--font-display); font-size: 1.5rem; margin-top: 0.5rem; }
        .produto-detalhe-descricao { color: var(--color-ink-soft); margin-top: var(--space-md); max-width: 52ch; }
        .produto-detalhe-lista { color: var(--color-ink-soft); margin: var(--space-md) 0; padding-left: 1.1rem; }
        .produto-detalhe-lista li + li { margin-top: 0.4rem; }
        @media (max-width: 700px) {
          .produto-detalhe { grid-template-columns: 1fr; gap: var(--space-md); }
          .produto-detalhe-info { padding-top: 0; }
        }
      `}</style>
    </>
  )
}