export const state = () => ({
  token: null,
  loggedIn: false,
  loading: false,
  profile: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setProfile(state, profile) {
    state.profile = profile
  },
}

export const actions = {
  loadProfile({ commit }) {
    commit('setProfile')
  },
}
