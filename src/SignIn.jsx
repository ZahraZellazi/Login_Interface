import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className='wrapperI'>
      <div className="containerII">
        <div className="titleII">Hello New Friend !</div>
        <p className='paragII'> To create an account please create an account with your personal info.</p>
        <button className="buttonII">Sign In</button>
      </div>
    <div className="containerI">
        <div className='titleI'>Sing In</div>
      <div className="social-containerI">
        <a href="*" className="socialI facebook"><FaFacebook /></a>
        <a href="*" className="socialI google"><FaGoogle /></a>
        <a href="*" className="socialI linkedin"><FaLinkedin /></a>
      </div>
      <div className="form-containerI">
        <input type="text" placeholder="E-mail" className="inputI" />
        <input type="password" placeholder="Password" className="inputI" />
        <a href="/forgot-password" className="link">Forgot Password?</a>
        <button className="buttonI">Sign Up</button>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
