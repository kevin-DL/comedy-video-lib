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
  },
}
</script>
<style lang="scss" scoped>
</style>
