<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Setup your profile
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form action="#" method="POST" @submit.prevent="submit">
          <div>
            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
              Display Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input v-model="displayName" id="name" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

          <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Save
            </button>
          </span>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Setup',
  head() {
    return {
      title: 'Profile Setup'
    }
  },
  data() {
    return {
      displayName: '',
      selectedCategories: [],
      categories: [
        {id:1, name: 'Sport'},
        {id:2, name: 'Comedy'},
        {id:3, name: 'News'},
      ]
    }
  },
  beforeCreate() {
    if (!this.$store.state.auth.loggedIn) {
      this.$router.push('/login')
    }
  },
  methods: {
    async submit() {
      const profile = await this.$api.$post('/api/profiles', {
        displayName: this.displayName
      })

      console.log(profile)

      if (profile) {
        this.$store.commit('auth/setProfile', profile.profile)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
