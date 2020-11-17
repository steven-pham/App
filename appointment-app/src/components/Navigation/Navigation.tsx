import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import logo from '../../logo/logo.png';


const Nav = () => {
    const navStyle ={
        color: '#0d82e2',
        textDecoration: 'none'
    }

    return (
        <nav>
            <img className='logo' src={logo} alt='logo here'></img>


            <ul className="nav-links">
                <Link style={navStyle} to='./'>
                    <li className='tab'>Home</li>
                </Link>

                <Link style={navStyle} to='./booking'>
                    <li className='tab'>Booking</li>
                </Link>

                <Link style={navStyle} to='./appointment'>
                    <li className='tab'>Appointment</li>
                </Link>



            </ul>
        </nav>
    )
}

export default Nav;