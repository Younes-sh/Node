const  express = require('express');
const config = require('../config/config');
const app = express()

app.use('/users',require('../Routes/routes'))

app.listen(config.port , () => console.log(`Example app listening on port ${config.port}`))