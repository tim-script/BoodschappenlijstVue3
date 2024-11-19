export const formatPrice = (price) => {
  return price.toLocaleString('nl-NL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
