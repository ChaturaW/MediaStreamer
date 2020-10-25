import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import Home from './Components/Home';
import Player from './Components/Player';
import './App.css';
import { Component } from 'react';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route key="home" exact path="/" component={Home}></Route>
                    <Route key="player" path="/player/:id" component={Home}></Route>
                </Switch>
            </Router>
        );
    }
}
export default App;