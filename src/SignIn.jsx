import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="container">
        <div className='title'>Sing In</div>
      <div className="social-container">
        <a href="https://www.facebook.com/" className="social"><FaFacebook /></a>
        <a href="https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdF4I76to9BgK28MnX5qXY7rlXPUBtAIf_8XOAgh1-agRrJYuja6glgt1Ll7AeJO5_Rlw7bYR8gcRA&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1829618674%3A1721034831493725&ddm=0" className="social"><FaGoogle /></a>
        <a href="https://www.linkedin.com/" className="social"><FaLinkedin /></a>
      </div>
      <div className="form-container">
        <input type="text" placeholder="E-mail" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <a href="/forgot-password" className="link">Forgot Password?</a>
        <button className="button">Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;
