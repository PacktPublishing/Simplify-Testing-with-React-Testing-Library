export const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
