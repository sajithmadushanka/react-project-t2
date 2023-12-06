import { Link } from "react-router-dom";
import './Login.scss'
function Login() {
    return ( 
        <>
             <div className="login-outer">
                <div className="login-inner">
                    <h3>LOGIN</h3>
                   <div className="input-form">
                   <form action="#" method="post">
                        <input type="text" placeholder='username'/> <br />
                        <input type="password" placeholder='password'/> <br />

                        <button type="submit">LOGIN</button>
                    </form>
                   </div>
                  
                       <Link to = '/register'>
                       <p>I don't have an account</p>
                       </Link>
                    
                </div>
              
            </div>
        </>
     );
}

export default Login;