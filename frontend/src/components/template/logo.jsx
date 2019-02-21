import  './logo.css';
import React from 'react';
import logo from '../../assets/imgs/logo.png';
import {Link} from 'react-router-dom';

const Logo = props =>
      <aside className="logo">
         <Link to="/" className="logo">
             <img src={logo} alt="Logo" />
         </Link>
      </aside>
export default Logo;
