import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav =()=>(
    <div className="nav">
        <ul className="nav__list">
        <li className="nav__link">
            <NavLink to="/lookup">Store Lookup</NavLink>
        </li>
        <li className="nav__link">
            <NavLink to="/login">Login</NavLink>
        </li>        
        </ul>
    </div>
);

export default Nav;