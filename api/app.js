require('dotenv').config()
const app = require('express')()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('Social Network')
})

app.use( (err, res) => {
        res.status(404).send('Wrong request!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})