
express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(express.json());

const dbCoonection = require('./DB/mongoose');
dbCoonection(app)


const router_index = require('./routes/_indexRoutes');
app.use('/api/v1', router_index)


app.use('/test',(req, res)=>{
    res.send('response has reveived')
})
