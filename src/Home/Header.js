import React from "react";
import source from "../images/Logo.jfif";
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <>
            <div className="container ui top attached menu">
            <img className="ui tiny circular image" src={source} alt="Logo" />
            <Link className=' item' to='/'><a >HOME</a></Link>
            <Link className='item' to='/patient' ><a >PATIENT</a></Link>
            <Link className='item' to='/donor'><a>DONOR</a></Link>
            <Link className='item' to='/contactus'>
            <a
                // href="https://plasmadonor.in/contact-us"
                // target="blank"
            >
                Contact Us
            </a>
            </Link>
            {/* <div className="right item">
                <b>Login</b>
            </div> */}
            </div>
            <span>
            <p
                style={{ margin: "auto", padding: "10px" }}
                className="ui header medium container center aligned"
            >
                PLASMA DONOR
                <img
                className="spaced ui mini circular image"
                src={source}
                alt="Logo"
                />
            </p>
            </span>
        </>
        )
    }
}

export default Header;