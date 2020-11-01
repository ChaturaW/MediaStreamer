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
                    <div className="col-8">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;