import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-1">
                        <Link className="searchLink" to={"/search"}>
                            <i className="fa fa-search searchIcon"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;