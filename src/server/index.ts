import express from 'express'
import path from 'path'

const app = express()

const distDir = path.resolve(__dirname, '../../dist')

app.use(express.static(distDir))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(distDir, 'index.html'))
})

app.listen(3000, () => {
  console.log('Server is up')
})
