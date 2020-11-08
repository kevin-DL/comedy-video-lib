<template>
  <div>
    <!-- Page title & actions -->
    <div
      class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mb-4"
    >
      <div class="flex-1 min-w-0">
        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          Home
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
    <div class="px-2">
      <h4 class="mb-2">Popular Videos</h4>
      <ul
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 xxl:grid-cols-4 xxl:gap-x-8"
      >
        <li v-for="i in [1, 2, 3, 4]" :key="i">
          <div class="space-y-4">
            <div class="relative pb-2/3">
              <img
                class="absolute object-cover h-full w-full shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
            </div>

            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h4>Lindsay Walton</h4>
                <p class="text-indigo-600">Front-end Developer</p>
              </div>
              <ul class="flex space-x-5">
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    <span class="sr-only">Twitter</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <h4 class="mt-4 mb-2">New videos</h4>
      <ul
        class="mb-2 space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 xxl:grid-cols-6 xxl:gap-10"
      >
        <li
          v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          :key="i"
          class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left"
        >
          <div class="space-y-6 xl:space-y-10">
            <img
              class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h4 class="text-white">Leonard Krasner</h4>
                <p class="text-indigo-400">Senior Designer</p>
              </div>

              <ul class="flex justify-center space-x-5">
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    <span class="sr-only">Twitter</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
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
  methods: {},
}
</script>

<style>
</style>
