import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import "./SignUp.css"

function SignUp() {
  return (
    <div className='wrapperU'>
    <div className="containerU">
        <div className='titleU'>Sign Up</div>
      <div className="social-containerU">
        <a href="*" className="socialU facebook"><FaFacebook /></a>
        <a href="*" className="socialU google"><FaGoogle /></a>
        <a href="*" className="socialU linkedin"><FaLinkedin /></a>
      </div>
      <div className="form-containerU">
        <input type="text" placeholder="Name" className="inputU" />
        <input type="text" placeholder="E-mail" className="inputU" />
        <input type="password" placeholder="Password" className="inputU" />
        <a href="/forgot-password" className="link">Forgot Password?</a>
        <button className="buttonU">Sign Up</button>
      </div>
    </div>
    <div className="containerUU">
        <div className="titleUU">Welcome Back!</div>
        <p className='paragUU'> To connected with us please login with your personal info.</p>
        <button className="buttonUU">Sign In</button>
      </div>
    </div>

  );
  }

export default SignUp