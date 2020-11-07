export const state = () => ({
  token: null,
  loggedIn: false,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn
  },
}
