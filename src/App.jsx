import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Produtos from './components/Produtos'
import Encomendas from './components/Encomendas'
import Contato from './components/Contato'
import Footer from './components/Footer'
import ProdutoPagina from './components/ProdutoPagina'

function getProductIdFromPath() {
  const match = window.location.pathname.match(/^\/produto\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

export default function App() {
  const [produtoId, setProdutoId] = useState(getProductIdFromPath)

  const abrirProduto = (id) => {
    window.history.pushState({}, '', `/produto/${encodeURIComponent(id)}`)
    setProdutoId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const voltarParaProdutos = () => {
    window.history.pushState({}, '', '/')
    setProdutoId(null)
  }

  useEffect(() => {
    const onPopState = () => setProdutoId(getProductIdFromPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (produtoId || !window.location.hash) return

    const elemento = document.querySelector(window.location.hash)
    if (!elemento) return

    window.requestAnimationFrame(() => {
      elemento.scrollIntoView({ behavior: 'smooth' })
    })
  }, [produtoId])

  if (produtoId) {
    return <ProdutoPagina produtoId={produtoId} onVoltar={voltarParaProdutos} />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Produtos onAbrirProduto={abrirProduto} />
        <Encomendas />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
