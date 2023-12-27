import React from 'react'
import Logo from './assets/icons/icon-logo.svg'
import User from './assets/icons/person.fill.svg'
import Card from './assets/icons/bag.fill.svg'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
    <div className="wrapper">
        <div className="header">
        <ul className="menu">
          <Link to={'/App'}>
            <li><a href='#home'>Главная</a></li>
          </Link>
            <li><a href='#about'>О нас</a></li>
            <li><a href='#categories'>Каталог</a></li>    
        </ul>
          <div className="logo">
          <Link to={'/App'}><a href='#home'><img src={Logo} /></a></Link>
          <Link to={'/App'}><a href='#home'><h1>Tea History</h1></a></Link>
          </div>
        <ul className="menu">
          <li><a href='#delivery'>Доставка</a></li>
          <li><a href='#contacts'>Контакты</a></li>
        </ul>
        
        <div className="header_icons">
          <Link to={'/Login'}>
            <img src={User} />
          </Link>
          <Link to={'/Cart'}>
            <img src={Card} />
          </Link>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Header