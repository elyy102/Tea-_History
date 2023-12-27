import React from 'react'
import Logo from './assets/icons/footer-logo.svg'
import Inst from './assets/icons/inst.svg'
import Tg from './assets/icons/tg.svg'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <>
    <div className="footer">
            <div className="footer_logo">
                <img src={Logo} />
                <h1>Tea History</h1>
            </div>
                <ul className='footer_menu'>
                <li><a href='#home'>Главная</a></li>
                <li><a href='#about'>О нас</a></li>
                <li><a href="">Каталог</a></li>
                <li><a href='#delivery'>Доставка</a></li>
                <li><a href='#contacts'>Контакты</a></li>
                </ul>
            <div className="footer_icons">
            <Link to={'/App'}><img src={Inst} /></Link>
            <Link to={'/App'}><img src={Tg} /></Link>
            </div>
        </div>
    
    </>
  )
}

export default Footer