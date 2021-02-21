import React from 'react'
import './navbar.css'
import Logo from './logo.png'


const navbar=()=> {
    return (
        <>
            <div className="navbar nav-color">
                <div className="navbar-brand">
                    <img src={Logo} width= "650" height="400"/>
                </div>
            </div>
        </>
    )
}

export default navbar;
