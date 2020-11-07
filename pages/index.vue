<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Comedy Video</h1>
      <label
        for="email"
        class="block text-sm font-medium leading-5 text-gray-700"
        >Email</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          id="email"
          v-model="email"
          class="form-input block w-full sm:text-sm sm:leading-5"
          placeholder="you@example.com"
        />
      </div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      const token = await this.$magic.auth.loginWithMagicLink({
        email: this.email,
      })
      this.$store.commit('auth/setToken', token)
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
