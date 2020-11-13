<template>
  <div>
    <div
      class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mb-4"
    >
      <div class="flex-1 min-w-0">
        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          Profile
        </h1>
      </div>
      <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <span class="order-1 ml-3 shadow-sm rounded-md sm:order-0 sm:ml-0">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            Share
          </button>
        </span>
        <span class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Create
          </button>
        </span>
      </div>
    </div>
    <div v-if="profile" class="lg:mx-2 mt-4 border-2 border-gray-200 shadow-md rounded-md p-2 flex flex-col md:flex-row justify-between">
      <label for="profile-image" class="lg: mr-2">
        <img class="rounded-full" :src="profile.picture" alt="profile image" id="profile-image">
        <span class="block mt-2">{{ profile.displayName }}</span>
      </label>
      <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
      <div>
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Most popular videos</h2>
        <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li class="col-span-1 flex shadow-sm rounded-md">
            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
              GA
            </div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Graph API</a>
                <p class="text-gray-500">16 Members</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                  <!-- Heroicon name: dots-vertical -->
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>

          <li class="col-span-1 flex shadow-sm rounded-md">
            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
              CD
            </div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Component Design</a>
                <p class="text-gray-500">12 Members</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                  <!-- Heroicon name: dots-vertical -->
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>

          <li class="col-span-1 flex shadow-sm rounded-md">
            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-orange-500 text-white text-sm leading-5 font-medium rounded-l-md">
              T
            </div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Templates</a>
                <p class="text-gray-500">16 Members</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                  <!-- Heroicon name: dots-vertical -->
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>

          <li class="col-span-1 flex shadow-sm rounded-md">
            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-green-400 text-white text-sm leading-5 font-medium rounded-l-md">
              RC
            </div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">React Components</a>
                <p class="text-gray-500">8 Members</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                  <!-- Heroicon name: dots-vertical -->
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="lg:mx-2 mt-4" v-if="stats">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Last 30 days
      </h3>
      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <!-- Heroicon name: users -->
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                    Total Subscribers
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl leading-8 font-semibold text-gray-900">
                      71,897
                    </div>
                    <div class="ml-2 flex items-baseline text-sm leading-5 font-semibold text-green-600">
                      <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">
                    Increased by
                  </span>
                      122
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                View all
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <!-- Heroicon name: mail-open -->
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                    Avg. Open Rate.
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl leading-8 font-semibold text-gray-900">
                      58.16%
                    </div>
                    <div class="ml-2 flex items-baseline text-sm leading-5 font-semibold text-green-600">
                      <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">
                    Increased by
                  </span>
                      5.4%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                View all
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <!-- Heroicon name: cursor-click -->
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                    Avg. Click Rate
                  </dt>
                  <dd class="flex items-baseline">
                    <div class="text-2xl leading-8 font-semibold text-gray-900">
                      24.57
                    </div>
                    <div class="ml-2 flex items-baseline text-sm leading-5 font-semibold text-red-600">
                      <svg class="self-center flex-shrink-0 h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">
                    Decreased by
                  </span>
                      3.2%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                View all
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  middleware: 'authenticated',
  data() {
    return {
      profile: null,
      stats: true
    }
  },
  mounted() {
    this.profile = this.$store.state.auth.profile
  }
}
</script>

<style scoped>

</style>
