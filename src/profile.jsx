import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Profile_img from './assets/icons/profile.svg'

function Profile() {
 
  return (
    <>
    <Header />
    <div className="wrapper">
        <div className="profile">
            <div className="myinformation">
                <h1 className="myinformation_title">Личная информация</h1>
                <div className="myinformation_containers">
                    <img src={Profile_img}/>
                    <div className="myinformation_containers_data">
                        <h1 className="myinformation_containers_data_nickname">Иванов Иван</h1>
                        <p className="myinformation_containers_data_number">+7 (900) 87-95-653</p>
                        <p className="myinformation_containers_data_email">ivanovivan12@gmail.com</p>
                    </div>
                </div>
                <button className='myinformation_btn'>Выйти</button>
            </div>
            <div className="myorders">
            <h1 className="myorders_title">Мои заказы</h1>
            <div className="myorders_orders">
                <p className="myorders_number">1. 17359735</p>
                <p className="myorders_number">1. 17359735</p>
                <p className="myorders_number">1. 17359735</p>
                <p className="myorders_number">1. 17359735</p> 
            </div>
                
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Profile