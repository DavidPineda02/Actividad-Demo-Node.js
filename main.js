import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hola ADSO!! Bienvenidos al Sistema</h1>')
})

app.get('/aprendices', (req, res) => {
    res.send('<h3>Hola Aprendices, bienvenidos al sistema de gestión. El sistema permite registrar, actualizar y eliminar información de los aprendices.</h3>')
})

app.get('/programas', (req, res) => {
    res.send('<h3>Hola Programas, bienvenidos al sistema de gestión. El sistema permite registrar, actualizar y eliminar información de los programas de formación.</h3>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
