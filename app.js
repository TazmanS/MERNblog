const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/article', require('./routes/article.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/author', require('./routes/author.routes'))
app.use('/api/hashtag', require('./routes/hashtag.routes'))


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

async function start(){
    try{
      await mongoose.connect(config.get("mongoUri"), {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
      })
      app.listen(PORT, () => {
          console.log(`App has been started on port ${PORT}...`)
      })
    } catch(e){
      console.log('Server Error', e.message)
      process.exit(1)
    }
}

start()