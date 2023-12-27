import './catalog_chinatea.css'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Catalog_tea from './assets/images/catalog_tea.svg'
import Card from './assets/icons/bag.fill.svg'
import React, {useEffect, useState } from 'react'

function Product() {

    
  return (
    <>
    <div className="wrapper">
        <div className="card">
            <div className="elipse">
                <img src={Catalog_tea} />
            </div>
            <h1 className="card_title">Грация</h1>
            <p className="composition"><span>Состав:</span> курильский чай, лист земляники, зизифора, чага, лабазник, лаванда, ягода рябины.</p>
            <div className="card_footer">
                <p className="price">1290Р</p>
                    <img src={Card} />
            </div>
        
        </div>
    </div>
    </>
  )
}

export default Product