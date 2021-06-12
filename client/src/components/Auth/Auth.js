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

    const [isError, setIsError] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();

    const toggleForm = () => {
        setIsSignup(!isSignup);
        setIsError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            if (formData.firstName.length > 0 && formData.lastName.length > 0 && formData.email.length > 0 && formData.password.length > 0 && formData.repeatPassword.length > 0) {
                dispatch(signup(formData, history));
                setIsError(false);
            } else {
                setIsError(true);
            }
        } else {
            if (formData.email.length > 0 && formData.password.length > 0) {
                dispatch(signin(formData, history));
                setIsError(false);
            } else {
                setIsError(true);
            }
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
                                <Input className={ isError && !formData.firstName.length ? 'error input' : 'input' } id="firstName" type="text" name="firstName" placeholder={ isError && !formData.email.length ? 'First Name !' : 'First Name' } autoComplete="off" onChange={handleChange}/>
                                <Input className={ isError && !formData.lastName.length ? 'error input' : 'input' } id="lastName" type="text" name="lastName" placeholder={ isError && !formData.email.length ? 'Last Name !' : 'Last Name' } autoComplete="off" onChange={handleChange}/>
                            </div>
                            <Input className={ isError && !formData.email.length ? 'error input' : 'input' } id="email" type="email" name="email" placeholder={ isError && !formData.email.length ? 'Please enter a valid Email.' : 'Email Address' } autoComplete="off" onChange={handleChange}/>
                            <Input className={ isError && !formData.password.length ? 'error input' : 'input' } id="password" type="password" name="password" placeholder={ isError && !formData.email.length ? 'Please enter Password.' : 'Password' } onChange={handleChange}/>
                            <Input className={ isError && !formData.repeatPassword.length ? 'error input' : 'input' } id="repeatPassword" type="password" name="repeatPassword" placeholder={ isError && !formData.email.length ? 'Please repeat Password.' : 'Repeat Password' } onChange={handleChange}/>
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
                                <Label className={ isError && !formData.email.length ? 'textError label' : 'label' } htmlFor="email" text={<FiUser style={{fontSize: "25px", position: "relative", top: "3px"}}/>}/>
                                <Input className={ isError && !formData.email.length ? 'error input' : 'input' } id="email" type="email" name="email" placeholder={ isError && !formData.email.length ? 'Please enter a valid Email.' : 'Email Address' } autoComplete="off" onChange={handleChange}/>
                            </div>
                            <div>
                                <Label className={ isError && !formData.password.length ? 'textError label' : 'label' } htmlFor="password" text={<BsLockFill style={{fontSize: "25px", position: "relative", top: "3px"}}/>}/>
                                <Input className={ isError && !formData.password.length ? 'error input' : 'input' } id="password" type="password" name="password" placeholder={ isError && !formData.password.length ? 'Please enter correct Password.' : 'Password' } onChange={handleChange}/>
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

export default Auth;