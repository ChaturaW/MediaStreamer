import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            searchText: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(evt) {
        this.setState({ searchText: evt.target.value });
    }

    handleKeyPress(e){
        if (e.keyCode == 13){
            this.props.history.push(`/search?filter=${this.state.searchText}`);
            this.props.handler(this.state.searchText, e);
        }
    }

    render() {
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
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} onKeyDown={this.handleKeyPress} />
                        </div>
                        <div className="col-1">
                            <Link to={`/search?filter=${this.state.searchText}`} onClick={(e) => this.props.handler(this.state.searchText, e)}>
                                <i className="fa fa-search searchIcon"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default withRouter(Header);