import { Link } from 'react-router-dom';
import './style.css';
import * as reactIcons from "react-icons/fa";
import * as AireactIcons from "react-icons/ai";
import { useState } from 'react';
import { Navbar } from './navbar';

function Nav() {
    const [navbar, setNavbar] = useState(false)

    const showNavbar = () => setNavbar(!navbar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars" id='hamburger'>
                    <reactIcons.FaBars onClick={showNavbar} />
                </Link>
            </div>

            {/* this is the toggle for the nav menu using a ternary  */}
            <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showNavbar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className="menu-bars" id='menuClose'>
                            <AireactIcons.AiOutlineClose />
                        </Link>
                    </li>

                    {/* map through the Navbar object passed in from navbar.js to display all listed pages */}
                    {Navbar.map((page, index) => {
                        return (
                            <li key={index} className={page.className}>
                                <Link to={page.path}>
                                    <icon id='pageIcon'>{page.icon}</icon>
                                    <span>{page.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;