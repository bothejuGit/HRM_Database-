import React from 'react';
import { useNavigate } from 'react-router-dom';
import FourSvg from './Image/4.svg';
import './login-page.css';

export default function LoginPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const signInButton = () => {
    const email = document.querySelector('.email-button').value;
    const password = document.querySelector('.password-button').value;

    if (email === '' || password === '') {
      alert('Please fill the form');
    } else {
      if (email === 'e@gmail.com' && password === '1234') {
        alert('Login successful');
        navigate('/employe'); // Redirect to the employe page
      }
      else if(email === 'h@gmail.com' && password === '1234'){
        alert('Login successful');
        navigate('/HRManager'); // Redirect to the HRManager page
      }
      else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div className='main-container'>
      <div className='left-container'>
        <h1>Welcome Back!</h1>
        <div>To keep connected with us </div>
        <div>please login with your personal info</div>
        <img className='jupiter-img' src={FourSvg} alt='four' />
      </div>
      <div className='right-container'>
        <h1>Sign In</h1>
        <form className='right-inside-container' onSubmit={(e) => e.preventDefault()}>
          <input className='email-button' type='email' placeholder='Email' />
          <input className='password-button' type='password' placeholder='Password' />
          <button type="button" onClick={signInButton} className='sign-in-button'>Sign In</button>
          <p className='forget-password-link'>Forgot your password?</p>    
        </form>
      </div>
    </div>
  );
}
