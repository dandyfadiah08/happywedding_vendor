export default ({ app }, inject) => {
  inject(
    'capitalize',
    (string) => string.charAt(0).toUpperCase() + string.slice(1)
  )
}
