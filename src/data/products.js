// Dados mocados. Quando a API estiver pronta, troque o array MOCK_PRODUCTS
// por uma chamada real dentro de fetchProducts() — o restante do app não
// precisa mudar, pois todo mundo consome fetchProducts()/fetchProductById().

const MOCK_PRODUCTS = [
  {
    id: 'bordado-nome-toalha',
    categoria: 'Bordado personalizado',
    nome: 'Toalha com bordado de nome',
    preco: 69.9,
    corDestaque: '#6B2D42',
    padrao: 'ondas',
    descricaoCurta: 'Toalha de banho felpuda com o nome bordado à mão.',
    descricaoLonga:
      'Toalha 100% algodão, bordado feito à mão fio a fio com a fonte e cor que você escolher. Ideal para presentear ou renovar o enxoval.',
    detalhes: [
      'Tecido: 100% algodão, alta absorção',
      'Bordado sob encomenda, escolha a fonte e a cor da linha',
      'Tamanho único: 70x140cm',
      'Prazo médio de produção: 5 dias úteis',
    ],
  },
  {
    id: 'bordado-monograma-necessaire',
    categoria: 'Bordado personalizado',
    nome: 'Necessaire com monograma',
    preco: 54.9,
    corDestaque: '#6B2D42',
    padrao: 'folhas',
    descricaoCurta: 'Necessaire de linho com iniciais bordadas.',
    descricaoLonga:
      'Necessaire em linho cru com forro impermeável, bordado com as iniciais do seu jeito — em ponto cheio ou ponto haste.',
    detalhes: [
      'Tecido externo: linho | forro impermeável',
      'Até 3 iniciais bordadas',
      'Tamanho: 22x16cm',
      'Prazo médio de produção: 4 dias úteis',
    ],
  },
  {
    id: 'touca-cetim-classica',
    categoria: 'Touca de cetim',
    nome: 'Touca de cetim clássica',
    preco: 34.9,
    corDestaque: '#C9A15A',
    padrao: 'liso',
    descricaoCurta: 'Touca de cetim com elástico duplo, protege o cabelo à noite.',
    descricaoLonga:
      'Touca confeccionada em cetim de alta densidade, reduz o atrito com os fios e ajuda a manter a hidratação e o cacho. Elástico duplo para não apertar.',
    detalhes: [
      'Tecido: cetim premium',
      'Elástico duplo embutido',
      'Tamanho único, ajustável',
      'Disponível em 8 cores',
    ],
  },
  {
    id: 'touca-cetim-laco',
    categoria: 'Touca de cetim',
    nome: 'Touca de cetim com laço',
    preco: 39.9,
    corDestaque: '#C9A15A',
    padrao: 'bolinhas',
    descricaoCurta: 'Touca de cetim com detalhe de laço frontal.',
    descricaoLonga:
      'Mesma qualidade da touca clássica, com um laço costurado à mão na parte da frente — feita para quem gosta de um toque delicado no dia a dia.',
    detalhes: [
      'Tecido: cetim premium',
      'Laço costurado à mão',
      'Tamanho único, ajustável',
      'Disponível em 6 cores',
    ],
  },
  {
    id: 'fronha-cetim-avulsa',
    categoria: 'Fronha de cetim',
    nome: 'Fronha de cetim avulsa',
    preco: 44.9,
    corDestaque: '#4A2545',
    padrao: 'ondas',
    descricaoCurta: 'Fronha de cetim para reduzir frizz e marcas no rosto.',
    descricaoLonga:
      'Fronha em cetim macio que desliza sobre a pele e o cabelo, ajudando a reduzir o atrito durante o sono. Compatível com travesseiros padrão e king.',
    detalhes: [
      'Tecido: cetim 100% poliéster premium',
      'Tamanho: 50x70cm',
      'Fechamento em envelope',
      'Disponível em 10 cores',
    ],
  },
  {
    id: 'fronha-cetim-bordada',
    categoria: 'Fronha de cetim',
    nome: 'Fronha de cetim bordada',
    preco: 59.9,
    corDestaque: '#4A2545',
    padrao: 'folhas',
    descricaoCurta: 'Fronha de cetim com iniciais bordadas no canto.',
    descricaoLonga:
      'A mesma fronha de cetim premium, com bordado discreto de iniciais no canto — um mimo a mais para presentear.',
    detalhes: [
      'Tecido: cetim 100% poliéster premium',
      'Tamanho: 50x70cm',
      'Bordado de até 3 iniciais',
      'Disponível em 8 cores',
    ],
  },
  {
    id: 'lencol-cetim-casal',
    categoria: 'Lençol de cetim',
    nome: 'Jogo de lençol de cetim casal',
    preco: 189.9,
    corDestaque: '#4A2545',
    padrao: 'ondas',
    descricaoCurta: 'Jogo completo de cetim para cama de casal.',
    descricaoLonga:
      'Jogo de lençol em cetim macio composto por lençol de baixo com elástico, lençol de cima e duas fronhas. Toque suave e caimento elegante.',
    detalhes: [
      'Composição: lençol de baixo, lençol de cima e 2 fronhas',
      'Tecido: cetim 100% poliéster premium',
      'Tamanho: casal (1,40x1,90m)',
      'Disponível em 10 cores',
    ],
  },
  {
    id: 'lencol-cetim-solteiro',
    categoria: 'Lençol de cetim',
    nome: 'Jogo de lençol de cetim solteiro',
    preco: 149.9,
    corDestaque: '#4A2545',
    padrao: 'bolinhas',
    descricaoCurta: 'Jogo completo de cetim para cama de solteiro.',
    descricaoLonga:
      'Mesmo conforto do jogo casal, em tamanho solteiro — perfeito para quarto infantil ou de adolescente, também disponível com bordado de nome.',
    detalhes: [
      'Composição: lençol de baixo, lençol de cima e 1 fronha',
      'Tecido: cetim 100% poliéster premium',
      'Tamanho: solteiro (0,88x1,88m)',
      'Disponível em 10 cores, com opção de bordado',
    ],
  },
]

// Simula uma chamada de API assíncrona. Troque o corpo desta função por um
// fetch('/api/produtos') (ou similar) quando o backend estiver pronto.
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 200)
  })
}

export function fetchProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS.find((p) => p.id === id) ?? null), 150)
  })
}
