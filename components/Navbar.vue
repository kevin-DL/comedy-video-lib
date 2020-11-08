<template>
  <div></div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {},
  methods: {
    async logout() {
      await this.$magic.user.logout()
      this.$store.commit('auth/setToken', null)
      this.$store.commit('auth/setLoggedIn', false)
    },
    async login() {
      const token = await this.$magic.auth.loginWithMagicLink({
        email: this.email,
      })
      this.$store.commit('auth/setToken', token)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
