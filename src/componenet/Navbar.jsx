/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           
            {props.title}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/about'>
                 
                 {props.name}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textinput">
                  textinput
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <div className="d-flex">
                <div className="bg-primary rounded mx-2"onClick = {()=> props.togglemode('primary')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                <div className="bg-danger rounded mx-2"onClick = {()=> props.togglemode('danger')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                <div className="bg-success rounded mx-2"onClick = {()=> props.togglemode('success')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                <div className="bg-warning rounded mx-2"onClick = {()=> props.togglemode('warning')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                <div className="bg-dark rounded mx-2"onClick = {()=> props.togglemode('dark')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                <div className="bg-light rounded mx-2"onClick = {()=> props.togglemode('light')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
             
              </div>
              <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
               <input className="form-check-input" type="checkbox" onClick = {()=> props.togglemode(null)} role="switch" id="flexSwitchCheckDefault"/>
                <p>jjjj</p>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

Navbar.propTypes={
  title:PropTypes.string.isRequired,

}
Navbar.defaultProps={
  title:"navbar",
  name:"About"

}