import './style.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { FiUser } from 'react-icons/fi';
import { BsLockFill } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import Label from '../Label/Label';
import Input from '../Input/Input'
import Button from '../Button/Button';

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup)
    };

    const submit = () => {
        console.log("Submit")
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenID;

        try {
            
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log("Google Sign In Was Unsuccessful, Try Again.");
    };

    return (
        <div className="auth">
            <form>                
                {isSignup ? (
                    <>
                        <h2>Sign Up</h2>
                        <hr/><br/>
                        <div className="signup">
                            <div>
                                <Input type="text" id="firstName" name="firstName" placeholder="First Name" className="input" autoComplete="off"/>
                                <Input type="text" id="lastName" name="lastName" placeholder="Last Name" className="input" autoComplete="off"/>
                            </div>
                            
                            <Input type="email" id="email" name="email" placeholder="Email" className="input" autoComplete="off"/>
                            <Input type="password" id="password" name="password" placeholder="Password" className="input" autoComplete="off"/>
                            <Input type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat Password" className="input" autoComplete="off"/>
                            <Button text="Sign Up" className="btn btn-success" onClick={submit} style={{width: "100%"}}/>
                            <p className="signin-signup" style={{marginTop: "1.5em"}}>Already a member?<Button text="Login Here" onClick={toggleForm}/></p>
                        </div>
                    </>
                ) : (
                    <>
                        <h2>Sign In</h2>
                        <hr/><br/>
                        <div className="signin">
                            <div>
                                <Label htmlFor="username" text={<FiUser style={{fontSize: "25px", position: "relative", top: "3px"}}/>} className="label"/>
                                <Input type="text" id="username" name="username" placeholder="Username" className="input" autoComplete="off" autoFocus="off"/>
                            </div>
                            <div>
                                <Label htmlFor="password" text={<BsLockFill style={{fontSize: "25px", position: "relative", top: "3px"}}/>} className="label"/>
                                <Input type="password" id="password" name="password" placeholder="Password" className="input"/>
                            </div>
                            <Link to="#" className="forgotPassword">Forgot Password?</Link>
                            <Button text="Sign In" className="btn btn-primary" onClick={submit} style={{width: "100%", marginTop: "1em"}}/>
                            <GoogleLogin
                                clientId="718725139208-naj82prdff8tnltnjlrvuigkaloc1hds.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button className="btn btn-danger" onClick={renderProps.onClick} disabled={renderProps.disabled} text="Sign In With Google" iconLeft={<FaGoogle style={{position: "relative", top: "2.5px", marginRight: "5px"}}/>} style={{width: "100%", marginTop: "0.7em"}}/>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                            <p className="signin-signup" style={{marginTop: "3em"}}>Dont have an account?<Button text="Signup Now" onClick={toggleForm}/></p>
                        </div>
                    </>
                )}   
            </form>
        </div>
    )
}

export default Auth
