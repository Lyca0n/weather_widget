import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav =()=>(
    <div className="nav">
        <ul className="nav__list">
        <li className="nav__link">
            <NavLink to="/">Home</NavLink>
        </li>
    
        </ul>
    </div>
);

export default Nav;