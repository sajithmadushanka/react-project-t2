require('dotenv').config();
const JWT = require('jsonwebtoken');
const key = process.env.SECRET_KEY;

const  authorize = (req, res, next)=>{
    // console.log(req.header('Authorization'));
    if(req.header('Authorization')){
        const token = (req.header('Authorization')).replace("Bearer ", "")
        try{
         const decoded = JWT.verify(token, key)
         console.log(decoded.payload);
         req.userId = decoded.payload
         next()
     
        }catch(e){
         console.log('invalid token')
        }
    }
   
}

module.exports = authorize;