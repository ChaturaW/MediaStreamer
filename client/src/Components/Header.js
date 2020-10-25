import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to={"/"}>
                <h5 style={{color: "white"}}>ලබුනෝරුව ආරණ්‍යය</h5>
            </Link>            
        </header>
    );
}
export default Header;