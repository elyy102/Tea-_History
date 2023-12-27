import { useState } from 'react'
import './index.css'
import './App.css'
import './assets/fonts/UniversityRoman.ttf';
import Header from './header'
import Footer from './footer'
import Home from './home'
import About from './about'
import Delivery from './delivery'
import Contacts from './contacts'
import Categories from './categories';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Categories/>
    <Delivery/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
