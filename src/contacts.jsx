import React from 'react'
import Location from './assets/icons/location.svg'
import Email from './assets/icons/email.svg'
import Phone from './assets/icons/phone.svg'
import Contacts_inst from './assets/icons/contacts_inst.svg'
import './contacts.css'
import { Link } from 'react-router-dom'

function Contacts() {

  return (
    <>
    <div className="wrapper">
        <div className="contacts" id='contacts'>
            <h1 className="about_h1">Контакты</h1>
            <div className="contacts_container">
                <div className="contacts_container_map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A704a2ddc461707fcff84482b3f135b38b9c40b00c84e8eafd038e8cb0c56ed45&amp;source=constructor" width="788" height="422" frameborder="0"></iframe>
                </div>
                <div className="contacts_container_rectangle">
                    <div className="contacts_container_rectangle_socialmedia">
                        <img src={Location}/>
                        <p className="contacts_container_rectangle_socialmedia_p">Москва, Жуков проезд, 3с2</p>
                    </div>
                    <div className="contacts_container_rectangle_socialmedia">
                        <img src={Email}/>
                        <p className="contacts_container_rectangle_socialmedia_p">teahistory@gmail.com</p>
                    </div>
                    <div className="contacts_container_rectangle_socialmedia">
                        <img src={Phone}/>
                        <p className="contacts_container_rectangle_socialmedia_p">+7 (900) 391-00-90</p>
                    </div>
                    <div className="contacts_container_rectangle_socialmedia">
                        <img src={Contacts_inst}/>
                        <p className="contacts_container_rectangle_socialmedia_p">@teahistory</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contacts