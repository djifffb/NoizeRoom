import React, { useRef } from 'react'
import { useAuthContext } from '../../context/AuthProvider'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";



const Register = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.status?.from || '/';
  const { error, register } = useAuthContext();


  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    const promise = await register(data.name, data.email, data.password, data.password_confirmation);

    if (promise) {
      navigate('/')
    }
  }



  return (
    <div className='auth-page'>
      <Link to={from} className='link-back'><IoArrowBack /></Link>

      <div className='auth-page__main'>
        <form onSubmit={onSubmit} className='auth-page__form'>
          <div className='auth-page__header'>
            <h2 className='auth-page__title'>Sign up for NoizeRoom</h2>
          </div>

          <div className='auth-page__field'>
            <input type="text" ref={nameRef} name='name' placeholder='Name'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.name}</p>
          </div>


          <div className='auth-page__field'>
            <input type="email" ref={emailRef} name='email' placeholder='Email'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.email}</p>
          </div>


          <div className='auth-page__field'>
            <input type="password" ref={passwordRef} name='password' placeholder='Password'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.password}</p>
          </div>


          <div className='auth-page__field'>
            <input type="password" ref={passwordConfirmationRef} name='password_confirmation' placeholder='Password Confirmation'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.password_confirmation}</p>
          </div>


          <div className='auth-page__submit'>
            <button type="submit" className='auth-page__button'>Enter</button>
          </div>

          <p className='text-[#525252]'>
            Already have an account ?
            <Link to="/login" className='text-[#fffefb] hover:underline'> Sign in now</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register