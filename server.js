const express = require('express')
const next = require('next')
const parseLanguage = require('./server-util/parseLanguage').parseLanguage

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  server.use('*', (req, res, next) => {
    req.language = parseLanguage(req.get('Accept-Language'))
    next()
  })

  server.get('*', (req, res) => handle(req, res))

  await server.listen(3000)
  console.log('> Ready on http://localhost:3000')
})()
