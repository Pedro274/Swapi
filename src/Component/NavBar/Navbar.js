import React from 'react';
import './Navbar.scss';
import {NavLink,Link} from 'react-router-dom'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';


function Navbar() {
    return (
        <div className='navBar_container'>
            <div className='toNavBar_container'>
                <SocialMediaLinks/>
                <div className='img_container'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png'
                        alt="start wars logo"
                        width='240px'
                        height='100px'/>
                </div>
                <div className='logIn_signUp_Container'>
                    <Link to= '/LogIn'>LOG IN</Link>
                </div>
            </div>
            <div className='navLinks'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/Films'>Films</NavLink>
                <NavLink to='/Contact'>Contact</NavLink> 
            </div>
        </div>
    )
}

export default Navbar
