const express = require('express')
const app = express()

const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
app.use(express.static(`${__dirname}/resrecs_frontend/build`))

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/resrecs_frontend/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
