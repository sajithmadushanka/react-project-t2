const { default: mongoose } = require("mongoose");
require('dotenv').config()


const PORT = process.env.SERVER_PORT || 3888;

async function  dbConnection(app){
    const database = 'mytodo';
   const con = mongoose.connect(`mongodb://127.0.0.1:27017/${database}`).then(()=>{
        console.log('mongoose has connected');
        app.listen(PORT, ()=>console.log(`server is up and running on ${PORT}`))
    }).catch((e)=>{console.log("mongoose connection error", e)});

}

module.exports = dbConnection;