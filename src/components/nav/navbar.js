import React from "react";
import * as FareactIcons from "react-icons/fa"
import * as IoreactIcons from "react-icons/io"

export const Navbar = [
    {
        title: 'HOME',
        path: '/',
        icon: <IoreactIcons.IoIosHome />,
        className: 'nav-text'
    },
    {
        title: 'PROJECTS',
        path: '/projects',
        icon: <FareactIcons.FaCode />,
        className: 'nav-text'
    },
    {
        title: 'CONTACT',
        path: '/contact',
        icon: <IoreactIcons.IoIosContact />,
        className: 'nav-text'
    }
] 