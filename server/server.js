const  express = require('express');
const config = require('../config/config');
const app = express()
app.use(express.urlencoded({extended:false}))

app.use('/users',require('../routes/user'))

app.listen(config.port , () => console.log(`Example app listening on port ${config.port}`))