export default function ({ $axios, store }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  // Set baseURL to something different
  api.setBaseURL(process.env.baseApiUrl)

  api.onRequest(config => {
    config.headers = {
      ...config.headers,
      Authorization: store.state.auth.token
    }
  })

  // Inject to context as $api
  inject('api', api)
}


// export default function ({ $axios, redirect }) {
//   $axios.s
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url)
//   })
//
//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400')
//     }
//   })
// }
