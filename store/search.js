export const state = () => ({
  selected: {
    category: null,
    city: null,
    rating: null,
  },
})

export const mutations = {
  setCity(state, city) {
    state.selected.city = city
  },
  setCategory(state, category) {
    state.selected.category = category
  },
  setRating(state, rating) {
    state.selected.rating = rating
  },
}
