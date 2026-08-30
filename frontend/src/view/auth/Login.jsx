import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthProvider'
import { IoArrowBack } from "react-icons/io5";



const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', });
  const navigate = useNavigate();
  const location = useLocation();

  const { error, login } = useAuthContext();
  const from = location.state || '/';

  const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value }); };
  const handlerSubmit = async (e) => {
    e.preventDefault();

    const success = await login(formData.email, formData.password);
    if(success) {
      navigate('/');
    } else {
      alert('код ошибки 500');
    }
  };


  return (
    <div className='auth-page'>
      <Link to={from} className='link-back'><IoArrowBack/></Link>
      <main className='auth-page__main'>
        <form onSubmit={handlerSubmit} className='auth-page__form'>

          <div className='auth-page__header'>
            <h2 className='auth-page__title'>Sign in NoizeRoom</h2>
          </div>

          <div className='auth-page__field'>
            <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your Email'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.email}</p>
          </div>

          <div className='auth-page__field'>
            <input type="password" name='password' value={formData.password} onChange={ handleChange } placeholder='Your Password'
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

      </main>
    </div>
  )
}

export default Login

