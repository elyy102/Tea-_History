import React from 'react'
import About_img from './assets/images/about.svg'
import './about.css'
import { Link } from 'react-router-dom'

function About() {

  return (
    <>
    <div className="wrapper">
        <div className="about" id='about'>
            <div className="about_title">
                <div className="line_1"></div>
                <h1 className="about_h1">О нас</h1>
                <div className="line_2"></div>
            </div>
            <div className="about_container">
                <p className="about_p">В нашем магазине представлен огромный выбор различных сортов чая, которые порадуют самых взыскательных ценителей этого напитка. Мы предлагаем как классические, так и экзотические сорта чая из разных стран мира. Наши опытные консультанты всегда готовы помочь вам с выбором и предложить оптимальный вариант, исходя из ваших вкусовых предпочтений. В нашем магазине вы найдете чай на любой вкус и бюджет. 
                <br/>
                <br/>Мы постоянно обновляем ассортимент, чтобы наши покупатели могли наслаждаться самыми свежими и качественными сортами чая. Наша миссия - предоставить возможность каждому попробовать и оценить многообразие вкусов и ароматов чая. Сделайте свой день ярче с чашкой ароматного и вкусного чая из нашего магазина!</p>
                <div className="about_images">
                    <div className="about_img_top">
                        <img src={About_img}/>
                    </div>
                    <div className="about_img_bottom">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About