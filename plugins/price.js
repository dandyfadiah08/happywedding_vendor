export default ({ app }, inject) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    currency: 'IDR',
  })
  inject('price', (value) => formatter.format(value))
}
