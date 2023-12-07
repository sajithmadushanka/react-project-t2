const userModel = require('../models/userModel');
const useAuth = require('../Authorization/userAuth');

const userRegister = async (req, res)=>{

    if(Object.keys(req.body).length !== 0){

       const isUserNameEexsist = async ()=>{
          try{
            const result = await userModel.findOne({_username: req.body._username});
            if(result !== null)return true;
            else return false;
          }catch(e){console.log('server error')}
       }

       const isEmailExsist =async ()=>{
           try{
            const result = await userModel.findOne({_email: req.body._email});
            if(result !== null) return true;
            else return false;
           }catch(e){console.log("error")}
        }
    
       if(await isUserNameEexsist()){res.send('username alreay exsit')}
       else if(await isEmailExsist()){res.send('email alreay exsit')}
       
       else{ const tempuser = new userModel({
                    ...req.body
                })
                tempuser.save().then(()=>{
                    res.send('user has been saved')
                }).catch(()=> res.send("save error"))
       }
    }else res.send('params required')
    
}
const userLogin = async (req, res)=>{
        // userModel.passwordchecker('123');
        const inputpassword = req.headers.password.trim();
        const inputusername = req.headers.username.trim();

    if(inputusername !== undefined && inputpassword !== undefined ){

      try{
        const user = await userModel.findOne({_username: inputusername});

        if(user !== null){
                if(await userModel.passwordchecker(inputpassword, user._password)){
                    const jwtToken = await user.generateToken();
                    res.set('Authorization', `Bearer ${jwtToken}`); 
                    res.json({user: user, token : jwtToken})
                }else res.send('password invalid');
         
        }else res.send('user not found');
      }catch(e){
        res.send('server error')
      }
       
    }else res.send('headers required')
    
}

module.exports  = {userRegister, userLogin}