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
                    {/* <p>Error Message</p> */}
                    <label htmlFor=""><FiUser style={{fontSize: "25px"}}/></label>
                    <input type="text" name="username" id="username" placeholder="Username"/>
                </div>
                <br/>
                <div>
                    {/* <p>Error Message</p> */}
                    <label htmlFor=""><BsLockFill style={{fontSize: "23px"}}/></label>
                    <input type="password" name="password" id="password"  placeholder="Password"/>
                </div>
                <br/>
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
                <Link className="forgotpassword" to="#">Forgot password?</Link>
            </form>
        </div>
    )
}

export default Login
