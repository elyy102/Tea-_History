import './catalog_chinatea.css'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Catalog_tea from './assets/images/catalog_tea.svg'
import Card from './assets/icons/bag.fill.svg'
import React, {useEffect, useState } from 'react'
import Product from './product'

function Catalog_coffee() {

  return (
    <>
    <Header />
    <div className="wrapper">
        <div className="about_title" id='categories'>
            <h1 className="about_h1">Китайский чай</h1>
        </div>
        
        <div className="catalog_cards">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Catalog_coffee