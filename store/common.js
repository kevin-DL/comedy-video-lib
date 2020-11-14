export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, data) {
    state.categories = data || []
  }
}

export const actions = {
  async getCategories({commit}) {
    const data = await this.$api.$get('/categories').catch(err => {
      console.error({err})
    })
    console.log(data)
    commit('setCategories', data?.data || [])
  }
}
