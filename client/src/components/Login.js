import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { FiUser } from 'react-icons/fi';
import { BsLockFill } from 'react-icons/bs';
import Button from './Button';

const Login = () => {

    const login = () => {
        console.log("Login");
    }

    const googleSuccess = (res) => {
        console.log(res);
    }

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful, Try Again.");
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
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <GoogleLogin
                        clientId="718725139208-naj82prdff8tnltnjlrvuigkaloc1hds.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button text="Google" className="btn" onClick={renderProps.onClick} style={{width: "115px", color: "#FFF", backgroundColor: "#f44336"}}/>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="sigle_host_origin"
                    />
                    {/* <Button text="Facebook" className="btn" onClick={login} style={{width: "115px", color: "#FFF", backgroundColor: "#0D47A1"}}/> */}
                </div>
                <br/>
                <p className="login-signup">Dont have an account?<Link to="/signup" style={{marginLeft: "5px"}}>Signup Now</Link></p>
                {/* <p className="login-signup">Dont have an account?<Button style={{marginLeft: "5px", cursor: "pointer", color: "#1976D2", backgroundColor: "transparent", border: "none"}} text="Signup Now" onClick={signup}/></p> */}
            </form>
        </div>
    )
}

export default Login
