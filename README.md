# Ponto & Linha — site da loja

Site em React + Vite para a loja de artesanato (bordados personalizados, toucas,
fronhas e lençóis de cetim), pronto para hospedar na Vercel.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba esta pasta em um repositório no GitHub (ou importe o ZIP diretamente
   pela Vercel).
2. Na Vercel, clique em "Add New Project" e selecione o repositório.
3. Framework Preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist` (a Vercel detecta isso automaticamente).
4. Deploy.

## O que editar antes de publicar

- `src/config/store.js`: nome da loja, número de WhatsApp (formato
  `5511999999999`), Instagram, e-mail e cidade.
- `src/data/products.js`: produtos mocados. Cada produto tem nome, categoria,
  preço, descrição curta/longa e uma lista de detalhes. As funções
  `fetchProducts()` e `fetchProductById()` simulam uma API — quando o backend
  estiver pronto, basta trocar o corpo delas por chamadas `fetch()` reais; o
  restante do app (vitrine, tela de produto, encomendas) já consome essas funções e não
  precisa mudar.
- As imagens dos produtos são geradas em SVG (`src/components/ProductArt.jsx`)
  como espaço reservado. Quando houver fotos reais, é só trocar esse
  componente por uma tag `<img>` apontando para a URL vinda da API.

## Como funcionam as seções

- **Produtos**: vitrine em grade com filtro por categoria; clicar em um produto
  abre uma tela própria com fotos (placeholder), preço, descrição completa e detalhes.
- **Encomendas**: formulário (produto, quantidade, prazo, descrição) que, ao
  ser enviado, monta uma mensagem e abre uma conversa no WhatsApp do ateliê
  com os dados do pedido. O botão "Encomendar este produto" dentro da tela de
  produto leva direto para este formulário com o produto já selecionado.
- **Contato**: formulário de mensagem livre que também abre uma conversa no
  WhatsApp da loja.
- **Sobre nós**: texto institucional, fácil de editar em
  `src/components/Sobre.jsx`.
