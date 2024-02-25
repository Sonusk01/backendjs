const express = require('express')

require('dotenv').config()
const app = express()


const port = 4001


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) =>{
    res.send('sonu_kumr09')
} )

app.get('/login', (req, res) => {
    res.send('<h1>please login here </h1>')
})

app.get('/youtube', (req, res)=> {
    res.send('Chai Aur Code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})