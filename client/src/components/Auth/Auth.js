import './style.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GoogleLogin } from 'react-google-login';
import { FiUser } from 'react-icons/fi';
import { BsLockFill } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';

import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {signin, signup} from '../../actions/auth';

const initialState = { username: '', firstName: '', lastName: '', email: '', password: '', repeatPassword: '' };

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenID;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log("Google Sign In Was Unsuccessful, Try Again.");
    };

    return (
        <div className="auth">
            <form onSubmit={handleSubmit}>                
                {isSignup ? (
                    <>
                        <h2>Sign Up</h2>
                        <hr/><br/>
                        <div className="signup">
                            <div>
                                <Input onChange={handleChange} type="text" id="firstName" name="firstName" placeholder="First Name" className="input" autoComplete="off"/>
                                <Input onChange={handleChange} type="text" id="lastName" name="lastName" placeholder="Last Name" className="input" autoComplete="off"/>
                            </div>
                            
                            <Input onChange={handleChange} type="email" id="email" name="email" placeholder="Email" className="input" autoComplete="off"/>
                            <Input onChange={handleChange} type="password" id="password" name="password" placeholder="Password" className="input" autoComplete="off"/>
                            <Input onChange={handleChange} type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat Password" className="input" autoComplete="off"/>
                            <Button type="submit" text="Sign Up" className="btn btn-success" style={{width: "100%"}}/>
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
                                <Input onChange={handleChange} type="text" id="username" name="email" placeholder="Username" className="input" autoComplete="off" autoFocus="off"/>
                            </div>
                            <div>
                                <Label htmlFor="password" text={<BsLockFill style={{fontSize: "25px", position: "relative", top: "3px"}}/>} className="label"/>
                                <Input onChange={handleChange} type="password" id="password" name="password" placeholder="Password" className="input"/>
                            </div>
                            <Link to="#" className="forgotPassword">Forgot Password?</Link>
                            <Button type="submit" text="Sign In" className="btn btn-primary" style={{width: "100%", marginTop: "1em"}}/>
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
