let server = require('./app.js')
const config = require('./config/env.config')

server.listen(config.APPLICATION_PORT, () => {
  console.log(`Node application running at port ${config.APPLICATION_PORT}`)
})
