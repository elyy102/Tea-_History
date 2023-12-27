import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Catalog_tea from './assets/images/catalog_tea.svg'
import Trash from './assets/icons/trash.svg'

function Cart() {
 
  return (
    <>
    <Header />
    <div className="wrapper">
        <div className="cart_container">
        <div className="cart">
            <div className="cart_left">
                <h1 className="myinformation_title">Корзина</h1>
                <div className="cart_left_containers">
                    <div className="cart_left_containers_left">
                        <img id='cart_left_containers_1' src={Catalog_tea}/>
                        <div className="cart_left_containers_data">
                            <h1 className="cart_left_containers_data_name">Грация</h1>
                            <p className="cart_left_containers_grams">50 гр.</p>
                        </div>
                    </div>
                    <div className="cart_left_containers_right">
                        <p className="cart_left_containers_price">1 290₽</p>
                        <img id='cart_left_containers_2' src={Trash}/> 
                    </div>
                </div>
                <div className="cart_left_containers">
                    <div className="cart_left_containers_left">
                        <img id='cart_left_containers_1' src={Catalog_tea}/>
                        <div className="cart_left_containers_data">
                            <h1 className="cart_left_containers_data_name">Грация</h1>
                            <p className="cart_left_containers_grams">50 гр.</p>
                        </div>
                    </div>
                    <div className="cart_left_containers_right">
                        <p className="cart_left_containers_price">1 290₽</p>
                        <img id='cart_left_containers_2' src={Trash}/> 
                    </div>
                </div>   
                <div className="cart_left_containers">
                    <div className="cart_left_containers_left">
                        <img id='cart_left_containers_1' src={Catalog_tea}/>
                        <div className="cart_left_containers_data">
                            <h1 className="cart_left_containers_data_name">Грация</h1>
                            <p className="cart_left_containers_grams">50 гр.</p>
                        </div>
                    </div>
                    <div className="cart_left_containers_right">
                        <p className="cart_left_containers_price">1 290₽</p>
                        <img id='cart_left_containers_2' src={Trash}/> 
                    </div>
                </div>
                <div className="cart_left_containers">
                    <div className="cart_left_containers_left">
                        <img id='cart_left_containers_1' src={Catalog_tea}/>
                        <div className="cart_left_containers_data">
                            <h1 className="cart_left_containers_data_name">Грация</h1>
                            <p className="cart_left_containers_grams">50 гр.</p>
                        </div>
                    </div>
                    <div className="cart_left_containers_right">
                        <p className="cart_left_containers_price">1 290₽</p>
                        <img id='cart_left_containers_2' src={Trash}/> 
                    </div>
                </div>
            </div>
            <div className="decoration">
                <h1 className="decoration_title">Оформление заказа</h1>
                <div className="decoration_input">
                    <input className='login_input' type="text" placeholder='Введите email...'/>
                    <input className='password_input' type="text" placeholder='Введите имя...'/>
                    <input className='login_input' type="text" placeholder='Введите номер телефона...'/>
                    <input className='password_input' type="text" placeholder='Введите пароль...'/>
                </div>      
            </div>
        </div>
        <button className='cart_btn'>Оформить</button>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Cart