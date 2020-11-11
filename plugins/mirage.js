import { createServer, Model } from 'miragejs'
const gravatar = require('gravatar')

if (process.env.NODE_ENV === 'development') {
  // startServer()
}

function startServer() {
  createServer({
    models: {
      video: Model,
      profile: Model,
      category: Model
    },

    seeds(server) {
      server.create("video", {title: "Awesome video", thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"})
      server.createList("video", 10, {thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"})

      server.create("category", {name: "Sports"})
      server.createList("category", 21)
    },

    routes() {
      this.namespace = 'api'

      this.get('/videos', (schema) => {
        return schema.videos.all()
      })

      this.get('/profiles', (schema) => {
        return schema.profiles.all()
      })

      this.get('/profiles/:id', (schema, request) => {
        let id = request.params.id

        return schema.profiles.find(id)
      })

      this.post('/profiles', (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.id = schema.profiles.all().length + 1
        attrs.email = 'testEmail@yopmail.com'
        attrs.picture = gravatar.url(attrs.email)

        return { profile: attrs }
      })

      this.get('/categories', (schema, request) => {
        return schema.categories.all()
      })
    },
  })
}
