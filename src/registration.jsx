import React from 'react'
import './registration.css'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'



function Registration() {


  return (
    <>
    <Header />
    <div className="login">
      <div className="login_rectangle">
      <h1 className='login_rectangle_h1'>Регистрация</h1>
        <input className='login_input' type="text" placeholder='Введите email...' />
        <input className='password_input' type="text" placeholder='Введите имя...'/>
        <input className='login_input' type="text" placeholder='Введите номер телефона...'/>
        <input className='password_input' type="text" placeholder='Введите пароль...'/>
        <input className='login_input' type="text" placeholder='Повторите пароль...'/>
        <button className='login_btn'>Зарегистрироваться</button>
        <p className='login_p'>Уже есть аккаунт?
        <Link to={'/Login'}>
          <a href="">Войти</a>
        </Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Registration