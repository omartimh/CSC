import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { BsLockFill } from 'react-icons/bs'

const Login = () => {
    return (
        <div className="login">
            <form>
                <h3>Login</h3>
                <hr/><br/>
                <div>
                    <label htmlFor=""><FiUser style={{fontSize: "25px"}}/></label>
                    <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" autoFocus="on"/>
                </div>
                <br/>
                <div>
                    <label htmlFor=""><BsLockFill style={{fontSize: "23px"}}/></label>
                    <input type="password" name="password" id="password"  placeholder="Password"/>
                </div>
                <Link to="#" className="forgotpassword">Forgot Password?</Link>
                <div>
                    <button className="btn btn-primary" type="submit" style={{width: "100%"}}>Log in</button>
                </div>
                <br/>
                <div>
                    <button className="btn" type="submit">1</button>
                    <button className="btn" type="submit">2</button>
                    <button className="btn" type="submit">3</button>
                </div>
                <br/>
                <p className="login-signup">Dont have an account?<Link to="/signup" style={{marginLeft: "5px"}}>Signup Now</Link></p>
            </form>
        </div>
    )
}

export default Login
