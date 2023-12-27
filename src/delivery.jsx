import React from 'react'
import './delivery.css'
import { Link } from 'react-router-dom'

function Delivery() {

  return (
    <>
    <div className="wrapper">
        <div className="delivery" id='delivery'>
        <div className="about_title">
                <h1 className="about_h1">Доставка и оплата</h1>
            </div>
            <div className="delivery_rectangles">
                <div className="delivery_rectangle_1">
                    <h1 className="delivery_rectangle_1_title">Доставка</h1>
                    <ul>
                        <li className="delivery_rectangle_1_p">Курьерская доставка по Москве и Санкт-Петербургу (внутри МКАД и КАД соответственно).</li>
                        <li className="delivery_rectangle_1_p">Самовывоз из наших магазинов в Москве и Санкт-Петербурге.</li>
                        <li className="delivery_rectangle_1_p">Доставка по России почтой России или СДЭК.</li>  
                    </ul>
                    
                </div>
                <div className="delivery_rectangle_2">
                    <h1 className="delivery_rectangle_1_title">Оплата</h1>
                    <ul>
                        <li className="delivery_rectangle_1_p">Наличные при получении заказа (для курьерской доставки и самовывоза)</li>
                        <li className="delivery_rectangle_1_p">Банковский перевод на наш счет (для доставки по России)</li>
                        <li className="delivery_rectangle_1_p">Оплата банковской картой через интернет (для покупателей из других стран)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Delivery