import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { BsLockFill } from 'react-icons/bs'

const Signup = () => {
    return (
        <div className="signup">
            <form>
                <h3>Signup</h3>
                <hr/><br/>
                <div>
                    <label htmlFor="username"><FiUser/></label>
                    <input type="text" name="username" id="username" placeholder="Username" autoComplete="off"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="email"><HiOutlineMail/></label>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="password"><BsLockFill/></label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="repeatPassword"><BsLockFill/></label>
                    <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat Password" autoComplete="off"/>
                </div>
                <br/>
                <div>
                    <button className="btn btn-success" type="submit" style={{width: "100%"}}>Sign up</button>
                </div>
                <p className="login-signup" style={{marginTop: "25px"}}>Already a member?<Link to="/login" style={{marginLeft: "5px"}}>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup
