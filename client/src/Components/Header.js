import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header(props) {
    const searchBox = useRef(null);

    const history = useHistory();
    const handleClick = (fn) => {
        const query = searchBox.current.value;        
        props.handler(query);
        history.push(`/search?filter=${query}`);
    }

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Link to={"/"}>
                            <img className="logo" src="/Logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-7">
                        <input ref={searchBox} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-1">
                        <button className="searchButton" onClick={handleClick}>
                            <i className="fa fa-search searchIcon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;