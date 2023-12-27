import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

function Login() {

  return (
    <>
    <Header />
    <div className="login">
      <div className="login_rectangle">
      <h1 className='login_rectangle_h1'>Вход</h1>
        <input className='login_input' type="text" placeholder='Введите логин...'/>
        <input className='password_input' type="text" placeholder='Введите пароль...'/>
        <button className='login_btn'>Войти</button>
        <p className='login_p'>Еще нет аккаунта?
        <Link to={'/Registration'}>
          <a href="">Зарегистрироваться</a>
        </Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login