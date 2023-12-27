import React from 'react'
import Chinatea from './assets/images/chinatea.svg'
import Herbaltea from './assets/images/herbaltea.svg'
import Matcha from './assets/images/matcha.svg'
import Coffee from './assets/images/Coffee.svg'
import './Categories.css'
import { Link } from 'react-router-dom'

function Categories() {

  return (
    <>
    <div className="wrapper">
    <div className="about_title" id='categories'>
                <h1 className="about_h1">Категории</h1>
            </div>
        <div className="categories_1">
            <Link to={'/Catalog_chinatea'}>
                <div className="category_1">
                    <div className="text">Китайский чай</div>
                    <img src={Chinatea}/>
                </div>
            </Link>
            <Link to={'/Catalog_herbaltea'}>
                <div className="category_2">
                    <div className="text">Травяной чай</div>
                    <img src={Herbaltea}/>
                </div>
            </Link>
        </div>
        <div className="categories_1">
        <Link to={'/Catalog_matcha'}>
            <div className="category_2">
                <div className="text">Матча</div>
                <img src={Matcha}/>
            </div>
        </Link>
        <Link to={'/Catalog_coffee'}>
            <div className="category_1">
                <div className="text">Кофе</div>
                <img src={Coffee}/>
            </div>
        </Link>
        </div>
        <Link to={'/Catalog_chinatea'}><button className='home_btn'>В каталог</button></Link>
    </div>
    
    </>
  )
}

export default Categories