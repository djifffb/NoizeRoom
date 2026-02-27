import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthProvider'



const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const { error,login } = useAuthContext();

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    const promise = await login(data.email, data.password)
    if (promise) {
      navigate('/');
    }
  }




  return (
    <div className='auth-page'>

      <form onSubmit={onSubmit} className='auth-page__form'>

        <div className='auth-page__header'>
          <h2 className='auth-page__title'>Sign in NoizeRoom</h2>
        </div>

        <div className='auth-page__field'>
          <input type="email" ref={emailRef} name='email' placeholder='Your Email'
            className='auth-page__input' />
          <p className='auth-page__error'>{error.email}</p>
        </div>

        <div className='auth-page__field'>
          <input type="password" ref={passwordRef} name='password' placeholder='Your Password'
            className='auth-page__input' />
          <p className='auth-page__error'>{error.password}</p>
        </div>

        <div className='auth-page__submit'>
          <button type="submit" className='auth-page__button'>Enter</button>
        </div>

        <p className='text-[#525252]'>
          Don't have an account ? 
          <Link to="/register" className='text-[#fffefb] hover:underline'> Sign up now</Link>
        </p>

      </form>

    </div>
  )
}

export default Login