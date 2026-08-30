import { useState } from 'react'
import { useAuthContext } from '../../context/AuthProvider'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";



const Register = () => {

  const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '',});
  const navigate = useNavigate();
  const location = useLocation();

  const { error, register } = useAuthContext();
  const from = location.status?.from || '/';

  const handlerChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) };
  const handlerSubmit = async (e) => {
    e.preventDefault();

    const success = await register(formData.name, formData.email, formData.password, formData.password_confirmation);
    if (success) {
      navigate('/')
    }else{
      alert('код ошибки 500');
    }
  };

  return (
    <div className='auth-page'>
      <Link to={from} className='link-back'><IoArrowBack /></Link>

      <main className='auth-page__main'>
        <form onSubmit={handlerSubmit} className='auth-page__form'>
          <div className='auth-page__header'>
            <h2 className='auth-page__title'>Sign up for NoizeRoom</h2>
          </div>

          <div className='auth-page__field'>
            <input type="text" value={formData.name} onChange={handlerChange} name='name' placeholder='Name'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.name}</p>
          </div>


          <div className='auth-page__field'>
            <input type="email" value={formData.email} onChange={handlerChange} name='email' placeholder='Email'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.email}</p>
          </div>


          <div className='auth-page__field'>
            <input type="password" value={formData.password} onChange={handlerChange} name='password' placeholder='Password'
              className='auth-page__input' />
            <p className='auth-page__error'>{error.password}</p>
          </div>


          <div className='auth-page__field'>
            <input type="password" value={formData.password_confirmation} onChange={handlerChange} name='password_confirmation' placeholder='Password Confirmation'
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
      </main>
    </div>
  )
}

export default Register