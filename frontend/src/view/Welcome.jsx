import {useEffect, useState} from 'react'
import axClient from '../axios-config'
import { Link } from 'react-router-dom'






const Welcome = () => {



  return (
    <div className='welcome-page'>

      <div className='welcome-page__intro'>
        <h2 className='welcome-page__title'>Discover the tracks you'll fall in love with.</h2>
        <p className='welcome-page__text'>Stream, save, and share music you truly love.</p>
        <div className='welcome-page__route'>
          <Link to="/login" className='welcome-page__button'>Start</Link>
        </div>
      </div>

      <div className='welcome-page__content'>
        <div className=''></div>
        <div className=''></div>
      </div>

    </div>
  )
}

export default Welcome