const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const JWT = require('jsonwebtoken');
require('dotenv').config();
const KEY = process.env.SECRET_KEY;

const userSchema = new mongoose.Schema({
    _fullName:{type:String, required:true, trim:true},
    _email:{type:String, required:true, trim:true},
    _username:{type:String, required:true, trim:true},
    _password:{type:String, required:true, trim:true}
})

userSchema.pre('save',async function (){
        const user = this;
        const encriptedPs = await bcrypt.hash(user._password, 8);
        user._password = encriptedPs;
} )

userSchema.statics.passwordchecker =  async function (inputPassword, hashedPassword){
    try{
        const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
        if(isMatch) return true;
        return false
    }catch(e){}
}

userSchema.methods.generateToken = async function generateToken(){
    const user = this;
    const payload = user._id.toString();
    
          const token =  JWT.sign({payload}, KEY, { expiresIn: '1h' });
          return token;
}

module.exports = mongoose.model('user', userSchema);
