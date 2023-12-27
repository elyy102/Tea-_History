import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Catalog_tea from './assets/images/catalog_tea.svg'
import Card from './assets/icons/bag.fill.svg'

function Catalog_coffee() {

  return (
    <>
    <Header />
    <div className="wrapper">
        <div className="about_title" id='categories'>
            <h1 className="about_h1">Кофе</h1>
        </div>
        <div className="filtering">
            <div className="filtering_filtr">
               <a href=""><p className="filtr">Белый</p></a>
                <hr /> 
            </div>
            <div className="filtering_filtr">
               <a href=""><p className="filtr">Зеленый</p></a>
                <hr /> 
            </div>
            <div className="filtering_filtr">
               <a href=""><p className="filtr">Красный</p></a>
                <hr /> 
            </div>
            <div className="filtering_filtr">
               <a href=""><p className="filtr">Улун</p></a>
                <hr /> 
            </div>
            <div className="filtering_filtr">
               <a href=""><p className="filtr">Пуэр</p></a>
                <hr /> 
            </div>
        </div>
        <div className="catalog_cards">
            <div className="card">
                <div className="elipse">
                    <img src={Catalog_tea} />
                </div>
                <h1 className="card_title">Грация</h1>
                <p className="composition"><span>Состав:</span> курильский чай, лист земляники, зизифора, чага, лабазник, лаванда, ягода рябины.</p>
                <div className="card_footer">
                    <p className="price">1 290₽</p>
                        <img src={Card} />
                </div>
            </div>
            <div className="card">
                <div className="elipse">
                    <img src={Catalog_tea} />
                </div>
                <h1 className="card_title">Грация</h1>
                <p className="composition"><span>Состав:</span> курильский чай, лист земляники, зизифора, чага, лабазник, лаванда, ягода рябины.</p>
                <div className="card_footer">
                    <p className="price">1 290₽</p>
                        <img src={Card} />
                </div>
            </div>
            <div className="card">
                <div className="elipse">
                    <img src={Catalog_tea} />
                </div>
                <h1 className="card_title">Грация</h1>
                <p className="composition"><span>Состав:</span> курильский чай, лист земляники, зизифора, чага, лабазник, лаванда, ягода рябины.</p>
                <div className="card_footer">
                    <p className="price">1 290₽</p>
                        <img src={Card} />
                </div>
            </div>
            <div className="card">
                <div className="elipse">
                    <img src={Catalog_tea} />
                </div>
                <h1 className="card_title">Грация</h1>
                <p className="composition"><span>Состав:</span> курильский чай, лист земляники, зизифора, чага, лабазник, лаванда, ягода рябины.</p>
                <div className="card_footer">
                    <p className="price">1 290₽</p>
                        <img src={Card} />
                </div>
            </div>
            <div className="card">
                <div className="elipse">
                    <img src={Catalog_tea} />
                </div>
                <h1 className="card_title">Грация</h1>
                <p className="composition"> <span>Состав:</span> курильский чай, лист земляники, зизифора, чага, лабазник, лаванда, ягода рябины.</p>
                <div className="card_footer">
                    <p className="price">1 290₽</p>
                        <img src={Card} />
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Catalog_coffee