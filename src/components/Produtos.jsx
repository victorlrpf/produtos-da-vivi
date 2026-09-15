import { useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../data/products'
import ProductArt from './ProductArt'

const formatPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function Produtos({ onAbrirProduto }) {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [busca, setBusca] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas')
  const [ordenacao, setOrdenacao] = useState('menor-preco')

  useEffect(() => {
    let ativo = true
    fetchProducts().then((lista) => {
      if (ativo) {
        setProdutos(lista)
        setCarregando(false)
      }
    })
    return () => {
      ativo = false
    }
  }, [])

  const categorias = ['Todas', ...new Set(produtos.map((produto) => produto.categoria))]
  const produtosFiltrados = useMemo(
    () => produtos
      .filter((produto) => produto.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))
      .filter((produto) => categoriaSelecionada === 'Todas' || produto.categoria === categoriaSelecionada)
      .sort((produtoA, produtoB) => ordenacao === 'maior-preco'
        ? produtoB.preco - produtoA.preco
        : produtoA.preco - produtoB.preco),
    [busca, categoriaSelecionada, ordenacao, produtos],
  )

  return (
    <section id="produtos" className="section">
      <div className="container">
        <p className="eyebrow">Produtos</p>
        <h2 className="section-heading">O que fazemos no ateliê</h2>
        <p className="section-intro">
          Busque por nome, escolha uma categoria e ordene os resultados para encontrar a peça ideal. Todas podem ser
          personalizadas — combine cor, tamanho e, quando disponível, bordado.
        </p>

        {carregando && <p className="produtos-status">Carregando produtos…</p>}

        {!carregando && (
          <div className="filtro-produtos" aria-label="Filtrar e ordenar produtos">
            <label htmlFor="busca-produto">Nome</label>
            <input
              id="busca-produto"
              type="search"
              placeholder="Buscar produto"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />
            <label htmlFor="filtro-categoria">Filtrar por categoria</label>
            <select
              id="filtro-categoria"
              value={categoriaSelecionada}
              onChange={(event) => setCategoriaSelecionada(event.target.value)}
            >
              {categorias.map((categoria) => <option key={categoria} value={categoria}>{categoria}</option>)}
            </select>
            <label htmlFor="ordenacao-produto">Ordenar</label>
            <select id="ordenacao-produto" value={ordenacao} onChange={(event) => setOrdenacao(event.target.value)}>
              <option value="menor-preco">Preço crescente</option>
              <option value="maior-preco">Preço decrescente</option>
            </select>
          </div>
        )}

        {!carregando && (
          <ul className="produtos-grid">
            {produtosFiltrados.map((produto) => (
              <li key={produto.id}>
                <button className="produto-card" onClick={() => onAbrirProduto(produto.id)}>
                  <span className="produto-art">
                    <ProductArt cor={produto.corDestaque} padrao={produto.padrao} nome={produto.nome} />
                  </span>
                  <span className="produto-card-body">
                    <span className="produto-categoria">{produto.categoria}</span>
                    <span className="produto-nome">{produto.nome}</span>
                    <span className="produto-preco">{formatPreco(produto.preco)}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {!carregando && produtosFiltrados.length === 0 && <p className="produtos-status">Nenhum produto encontrado.</p>}
      </div>

      <style>{`
        .produtos-status {
          margin-top: var(--space-md);
          color: var(--color-ink-soft);
        }
        .filtro-produtos {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: var(--space-md);
          flex-wrap: wrap;
        }
        .filtro-produtos label {
          font-size: 0.9rem;
          color: var(--color-ink-soft);
        }
        .filtro-produtos input,
        .filtro-produtos select {
          padding: 0.6rem 2rem 0.6rem 0.75rem;
          border: 1px solid var(--color-line);
          background: #fffaf5;
          color: var(--color-ink);
          font: inherit;
        }
        .produtos-grid {
          list-style: none;
          margin: var(--space-lg) 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 1.5rem;
        }
        .produto-card {
          width: 100%;
          background: #fffaf5;
          border: 1px solid var(--color-line);
          padding: 0;
          text-align: left;
          display: flex;
          flex-direction: column;
        }
        .produto-card:hover .produto-nome {
          color: var(--color-wine);
        }
        .produto-art {
          aspect-ratio: 4 / 3;
          display: block;
        }
        .produto-card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .produto-categoria {
          font-size: 0.75rem;
          color: var(--color-ink-soft);
        }
        .produto-nome {
          font-family: var(--font-display);
          font-size: 1.1rem;
          color: var(--color-plum);
        }
        .produto-preco {
          margin-top: 0.3rem;
          font-weight: 600;
          color: var(--color-wine);
        }
      `}</style>
    </section>
  )
}
