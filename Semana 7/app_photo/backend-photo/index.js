const express = require('express');
const cors = require('cors');
const path = require('path')
const imageRouter = require('./routers/imageRouter')

const port = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(imageRouter)

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
})