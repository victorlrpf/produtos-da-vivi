// Substitui fotos reais enquanto não há integração com a API/CDN de imagens.
// Gera um padrão simples em SVG a partir da cor e do "padrao" do produto,
// remetendo a tecido/bordado em vez de um retângulo cinza genérico.
export default function ProductArt({ cor = '#6B2D42', padrao = 'liso', nome = '' }) {
  const id = `pat-${padrao}-${cor.replace('#', '')}`

  return (
    <svg
      viewBox="0 0 320 240"
      role="img"
      aria-label={nome}
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill={cor} opacity="0.12" />
          {padrao === 'ondas' && (
            <path d="M0 12 Q6 4 12 12 T24 12" stroke={cor} strokeWidth="1.4" fill="none" opacity="0.5" />
          )}
          {padrao === 'bolinhas' && <circle cx="12" cy="12" r="2.2" fill={cor} opacity="0.45" />}
          {padrao === 'folhas' && (
            <path
              d="M12 4 C17 8 17 16 12 20 C7 16 7 8 12 4 Z"
              fill="none"
              stroke={cor}
              strokeWidth="1.2"
              opacity="0.45"
            />
          )}
          {padrao === 'liso' && <line x1="0" y1="24" x2="24" y2="0" stroke={cor} strokeWidth="1" opacity="0.25" />}
        </pattern>
      </defs>
      <rect width="320" height="240" fill="#fffaf5" />
      <rect width="320" height="240" fill={`url(#${id})`} />
      <rect x="18" y="18" width="284" height="204" fill="none" stroke={cor} strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
    </svg>
  )
}
