import { useEffect, useState } from 'react'
import { fetchProducts } from '../data/products'
import { storeConfig } from '../config/store'
import { buildWhatsappLink } from '../utils/whatsapp'

const formatPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function EncomendaFormulario({ produtoInicial = null }) {
  const [produtos, setProdutos] = useState([])
  const [produtoId, setProdutoId] = useState(produtoInicial?.id ?? '')
  const [buscaProduto, setBuscaProduto] = useState('')
  const [quantidade, setQuantidade] = useState(1)
  const [prazo, setPrazo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    fetchProducts().then(setProdutos)
  }, [])

  useEffect(() => {
    if (produtoInicial) {
      setProdutoId(produtoInicial.id)
      setBuscaProduto(produtoInicial.nome)
      setEnviado(false)
    }
  }, [produtoInicial])

  const produtoSelecionado = produtos.find((produto) => produto.id === produtoId)
  const produtosEncontrados = produtos.filter((produto) =>
    produto.nome.toLocaleLowerCase().includes(buscaProduto.toLocaleLowerCase()),
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!produtoSelecionado) return

    const linhas = [
      `Olá! Quero fazer uma encomenda na ${storeConfig.nome}.`,
      `Produto: ${produtoSelecionado.nome}`,
      `Quantidade: ${quantidade}`,
      prazo ? `Prazo desejado: ${prazo}` : null,
      descricao ? `Detalhes: ${descricao}` : null,
    ].filter(Boolean)

    const link = buildWhatsappLink(storeConfig.whatsappNumero, linhas.join('\n'))
    window.open(link, '_blank', 'noopener,noreferrer')
    setEnviado(true)
  }

  return (
    <form className="encomenda-form" onSubmit={handleSubmit}>
      {!produtoInicial && (
        <label className="campo">
          <span>Buscar produto</span>
          <input
            type="search"
            placeholder="Digite o nome do produto"
            value={buscaProduto}
            onChange={(event) => setBuscaProduto(event.target.value)}
          />
        </label>
      )}

      <label className="campo">
        <span>Produto</span>
        <select
          value={produtoId}
          onChange={(event) => setProdutoId(event.target.value)}
          required
          disabled={Boolean(produtoInicial)}
        >
          <option value="" disabled>Selecione um produto</option>
          {produtosEncontrados.map((produto) => (
            <option key={produto.id} value={produto.id}>
              {produto.nome} — {formatPreco(produto.preco)}
            </option>
          ))}
        </select>
      </label>

      <label className="campo">
        <span>Quantidade</span>
        <input type="number" min="1" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} required />
      </label>

      <label className="campo">
        <span>Prazo desejado (opcional)</span>
        <input type="text" placeholder="Ex.: até 20 de outubro" value={prazo} onChange={(event) => setPrazo(event.target.value)} />
      </label>

      <label className="campo">
        <span>Descrição do pedido</span>
        <textarea
          rows={4}
          placeholder="Cor, tamanho, texto para o bordado, referências..."
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </label>

      <button type="submit" className="btn btn-primary">Abrir encomenda no WhatsApp</button>

      {enviado && (
        <p className="encomenda-confirmacao" role="status">
          Encomenda montada — confira a conversa aberta no WhatsApp para confirmar com o ateliê.
        </p>
      )}
      <style>{`
        .encomenda-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          background: #fffaf5;
          border: 1px solid var(--color-line);
          padding: var(--space-md);
        }
        .campo {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.9rem;
        }
        .campo span { color: var(--color-ink-soft); }
        .campo select,
        .campo input,
        .campo textarea {
          font-family: var(--font-body);
          font-size: 0.98rem;
          padding: 0.65rem 0.75rem;
          border: 1px solid var(--color-line);
          background: var(--color-bg);
          color: var(--color-ink);
        }
        .encomenda-confirmacao {
          color: var(--color-wine);
          font-size: 0.9rem;
        }
      `}</style>
    </form>
  )
}
