import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to={"/"}>
                <h4 style={{color: "white"}}>ලබුනෝරුව ආරණ්‍යය</h4>
            </Link>            
        </header>
    );
}
export default Header;