import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className='Auth'>
      {/* left sie */}

      <div className='a-left'>
        <img src={Logo} alt='' />
        <div className='WebName'>
          <h1>AIR Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right side */}

      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Login</h3>

        <div>
          <input
            type='text'
            placeholder='UserName'
            className='infoInput'
            name='UserName'
          />
        </div>

        <div>
          <input
            type='text'
            className='infoInput'
            name='password'
            placeholder='password'
          />
        </div>

        <div>
          <a href='register' style={{ fontSize: "12px" }}>
            knew to this website login
          </a>
          <button className='button infoButton' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Sing Up</h3>

        <div>
          <input
            type='text'
            placeholder='First Name'
            className='infoInput'
            name='firstName'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='infoInput'
            name='lastName'
          />
        </div>

        <div>
          <input
            type='text'
            className='infoInput'
            name='username'
            placeholder='Username'
          />
        </div>

        <div>
          <input
            type='text'
            className='infoInput'
            name='password'
            placeholder='Password'
          />
          <input
            type='text'
            className='infoInput'
            name='confirmPass'
            placeholder='Confirm Password'
          />
        </div>

        <div>
          <a href='login' style={{ fontSize: "12px" }}>
            Already have an account. login
          </a>
          <button className='button infoButton' type='submit'>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
