export const state = () => ({
  redirectedFrom: null
})

export const mutations = {
  setRedirectedFrom(state, from) {
    state.redirectedFrom = from
  }
}
