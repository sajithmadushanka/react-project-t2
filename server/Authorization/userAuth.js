
const JWT = require('jsonwebtoken');
require('dotenv').config();
const KEY = process.env.SECRET_KEY;

function generateToken(payload){
    console.log(KEY)
          const token =  JWT.sign({payload}, KEY, { expiresIn: '1h' });
}

module.exports = {generateToken}