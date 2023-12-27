import React from 'react'
import Img1 from './assets/images/Rectangle 37.svg'
import Img2 from './assets/images/Rectangle 27.svg'
import Img3 from './assets/images/Rectangle 29.svg'
import Img4 from './assets/images/Rectangle 33.svg'
import Img5 from './assets/images/Rectangle 32.svg'
import Img6 from './assets/images/Rectangle 31.svg'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    <div className="wrapper">
        <div className="home" id='home'>
            <div className="home_img_containers">
              <div className="home_img_container_1">
                <img id='Img1' src={Img1} className='images_container'/>
              </div>
              <div className="home_img_container_1">
                <img id='Img2' src={Img2} className='images_container'/>
                <img id='Img4' src={Img4} className='images_container'/>
              </div>   
              <div className="home_img_container_1">
                <img id='Img3' src={Img3} className='images_container'/>
                <img id='Img5' src={Img5} className='images_container'/>
              </div>    
              <div className="home_img_container_1">
                <img id='Img6' src={Img6} className='images_container'/>
              </div>    
            </div>
            <h1 className="home_h1">Tea History</h1>
            <p className="home_p">Огромный выбор сортов, свежие поступления, опытные консультанты и яркие вкусы!</p>
            <Link to={'/Catalog_chinatea'}><button className='home_btn'>В каталог</button></Link>
        </div>
    </div>
    
    </>
  )
}

export default Home