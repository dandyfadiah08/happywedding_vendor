export const state = () => ({
  images: [],
})

export const mutations = {
  SET_DATA_IMAGES(state, data) {
    state.images = data
  },
}

export const actions = {
  async getList({ commit }) {
    try {
      const data = await this.$axios.$get('https://picsum.photos/v2/list')
      commit('SET_DATA_IMAGES', data)
    } catch (e) {
      // console.error(e)
    }
  },
  async getBlogList({ commit }) {
    try {
      const data = await this.$axios.$get('api/posts')
      commit('SET_DATA_IMAGES', data.posts)
    } catch (e) {
      // console.error(e)
    }
  },
  async getEventList({ commit }) {
    try {
      const data = await this.$axios.$get('https://picsum.photos/v2/list')
      commit('SET_DATA_IMAGES', data)
    } catch (e) {
      // console.error(e)
    }
  },
}
