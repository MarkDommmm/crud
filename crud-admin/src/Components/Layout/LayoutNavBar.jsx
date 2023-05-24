import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function LayoutNavBar() {




  return (
    <div style={{ marginBottom: "50px" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand " >
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to='/' className="nav-link active white_text" aria-current="page" >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to='/about'
                  className="nav-link active" aria-current="page" >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active" aria-current="page" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          

          <Link to='/user/add'>
            <button type="button" className="btn btn-success">AddUser</button>
          </Link>
        </div>
      </nav >
    </div >
  )
}

export default LayoutNavBar