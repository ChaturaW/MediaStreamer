import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to={"/"}>
                <img className="logo" src="/Logo.png" alt=""/>                
            </Link>
        </header>
    );
}
export default Header;