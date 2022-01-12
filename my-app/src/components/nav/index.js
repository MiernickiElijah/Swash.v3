import { Link, NavLink } from 'react-router-dom';
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
                <Link to="#" className="menu-bars">
                    <reactIcons.FaBars onClick={showNavbar} />
                </Link>
            </div>

            <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar=toggle'>
                        <Link to="#" className="menu=bars">
                            <AireactIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {/* HERE WE MAP THROUGH THE Navbar object passed in from navbar.js */}
                    {Navbar.map((page, index) => {
                        return (
                            <li key={index} className={page.className}>
                                <Link to={page.path}>
                                    {page.icon}
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