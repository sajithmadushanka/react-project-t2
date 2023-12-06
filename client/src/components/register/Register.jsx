import './Register.scss'

import {Link} from 'react-router-dom'

function Register() {

   
    return ( 
        <>
            <div className="register-outer">
                <div className="register-inner">
                    <h3>REGISTER</h3>
                   <div className="input-form">
                   <form action="#" method="post">
                        <input type="text" placeholder='full name'/> <br />
                        <input type="text" placeholder='email'/> <br />
                        <input type="text" placeholder='username'/> <br />
                        <input type="password" placeholder='password'/> <br />

                        <button type="submit">SUBMIT</button>
                    </form>
                   </div>
                  
                       <Link to = '/login'>
                       <p>I have an account</p>
                       </Link>
                    
                </div>
              
            </div>
        </>
     );
}

export default Register;