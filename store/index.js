export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('common/getCategories')
  },
}
