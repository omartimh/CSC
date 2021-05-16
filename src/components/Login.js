import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { BsLockFill } from 'react-icons/bs'
import Button from './Button'

const Login = () => {

    const login = () => {
        console.log("Login")
    }

    return (
        <div className="login">
            <form>
                <h3>Login</h3>
                <hr/><br/>
                <div>
                    <label htmlFor="username"><FiUser style={{fontSize: "25px"}}/></label>
                    <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" autoFocus="on"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="password"><BsLockFill style={{fontSize: "23px"}}/></label>
                    <input type="password" name="password" id="password"  placeholder="Password"/>
                </div>
                <Link to="#" className="forgotpassword">Forgot Password?</Link>
                <div>
                    <Button text="Log in" className="btn btn-primary" style={{width: "100%"}} onClick={login}/>
                </div>
                <br/>
                <div>
                    <Button text="1" className="btn" onClick={login}/>
                    <Button text="2" className="btn" onClick={login}/>
                    <Button text="3" className="btn" onClick={login}/>
                </div>
                <br/>
                <p className="login-signup">Dont have an account?<Link to="/signup" style={{marginLeft: "5px"}}>Signup Now</Link></p>
            </form>
        </div>
    )
}

export default Login
