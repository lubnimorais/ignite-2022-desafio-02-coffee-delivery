function formatMoney(price: number): string {
  return new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits : 2,
  }).format(price / 100)
}

export { formatMoney }