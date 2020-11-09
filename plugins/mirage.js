import { createServer } from 'miragejs'

if (process.env.NODE_ENV === 'development') {
  startServer(0)
}

function startServer() {
  createServer({
    routes() {
      this.namespace = 'api'

      this.get('/movies', () => {
        return {
          movies: [
            { id: 1, name: 'Inception', year: 2010 },
            { id: 2, name: 'Interstellar', year: 2014 },
            { id: 3, name: 'Dunkirk', year: 2017 },
          ],
        }
      })
    },
  })
}
