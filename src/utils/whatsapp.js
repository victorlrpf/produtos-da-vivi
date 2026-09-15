export function buildWhatsappLink(numero, mensagem) {
  const texto = encodeURIComponent(mensagem)
  return `https://wa.me/${numero}?text=${texto}`
}
