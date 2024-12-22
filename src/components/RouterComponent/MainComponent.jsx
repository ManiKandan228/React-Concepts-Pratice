import React from 'react'
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';

import HomePage from './HomePageComponent'
import AboutPage from './AboutPageComponent'
import ContactPage from './ContactPageComponent'

const MainComponent = () => {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path='/about' element={<AboutPage/>}></Route>
      <Route exact path='contact' element={<ContactPage/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default MainComponent