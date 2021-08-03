import React from 'react'
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import logo from '../icons/images.png'
const NavBar = () => {
    const[navToggle,setnavToggle]=useState(false);


    const navClick=()=>{
      setnavToggle(!navToggle);
    }
    
    return (
        <div className="wrap">
            <div className="tooglebar">
                <div className="threeline" onClick={navClick}>
                    <div className="line1 line"></div>
                    <div className="line2 line"></div>
                    <div className="line3 line"></div>
                </div>
                <div className="tooglelogo">
                <img className="logotoogle" src={logo} alt="" />
                </div>
            </div>
            <div className={`sidenav ${!navToggle? 'moveleft':""}`}>
                <div className="sidenavlinks">
                    <div className="sidelogo">
                        <div className="sidlogo">
                    <img className="sidenavlogo" src={logo} alt="" />
                        </div>
                    <div className="sidecross" onClick={navClick}>
                        <div className="cross1"></div>
                        <div className="cross2"></div>
                    </div>
                    </div>
                    <div className="sidelinkss">
                      <div className="hom sidelink1" >
                      <NavLink exact activeClassName="is-active" className="home sidenavhome" to="/">Home</NavLink>
                      </div>
                      <div className="abo sidelink2" >
                       <NavLink exact activeClassName="is-active" className="about sidenavabout" to="/about">About</NavLink>
                      </div>
                      <div className="new sidelink3" >
                       <NavLink exact activeClassName="is-active" className="newcontact sidenavnewcontact" to="/addnewcontact">New Contact</NavLink>
                      </div>
                    </div>
                </div>
            </div>
        <div className="Navbar">
            <div className="navbutton">
                <div className="hom b2" >
                <NavLink exact activeClassName="is-active" className="home b1" to="/">Home</NavLink>
                </div>
                <div className="abo b2" >
                <NavLink exact activeClassName="is-active" className="about b1" to="/about">About</NavLink>
                </div>
                <div className="new b2" >
                <NavLink exact activeClassName="is-active" className="newcontact b1" to="/addnewcontact">New Contact</NavLink>
                </div>
            </div> 
            <div className="navlogo l1">
                <img className="logo l2" src={logo} alt="" />
            </div>           
        </div>
    </div>
    )
}

export default NavBar
