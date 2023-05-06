import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../newpages/Home';
import Category from '../newpages/Category';
import Single from '../newpages/Single';

function Header() {
  return (
    <>
    <div className='top '>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 date'>
            <a href=''>17 April,2023</a>
            <a href=''>Advertisement</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
          </div>
          <div className='col-lg-6 icon '>
           <a href=''>
           <i class="fa-brands fa-facebook"></i> </a>
           <a href=''><i class="fa-brands fa-twitter"></i></a>
           <a href=''><i class="fa-brands fa-instagram"></i></a>
           <a href=''> <i class="fa-brands fa-linkedin-in"></i></a>



          
          
          </div>
        </div>
      </div>
    </div>

   <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src='https://new.axilthemes.com/demo/react/papr/images/logo-black.svg?imwidth=256'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item main">
          <Link className="nav-link " aria-current="page" to="/">Home
            </Link>
        </li>
        <li className="nav-item main">
          <Link className="nav-link" to="/Category/Business">Business</Link>
        </li>
        <li className="nav-item main">
          <Link className="nav-link" to="/Category/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item main">
          <Link className="nav-link" to="/Category/General">General</Link>
        </li>
        <li className="nav-item main">
          <Link className="nav-link" to="/Category/Health">Health</Link>
        </li>
        <li className="nav-item main">
          <Link className="nav-link" href="/Category/Sports">Sports</Link>
        </li>
       
        <li className="nav-item main">
          <Link className="nav-link" to="/Category/Technology">Technology</Link>
        </li>
        <li className="nav-item search">
          <Link className="nav-link" to="#"> <i class="fa-solid fa-magnifying-glass"></i></Link>
        </li>
        <li className="nav-item search1">
          <Link className="nav-link" to="#"> <i class="fa-solid fa-bars"></i></Link>
        </li>
      
       
      </ul>
      
    </div>
  </div>
</nav>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category/:id" element={<Category />} />
        
      
      </Routes>

    
    </>
  )
}

export default Header