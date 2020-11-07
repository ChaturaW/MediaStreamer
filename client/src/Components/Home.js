import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import VideoList from './VideoList';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videoId: null,
            filter: null
        };
        this.handlerOnClick = this.handlerOnClick.bind(this);
        this.searchOnClick = this.searchOnClick.bind(this);
    }

    async componentDidMount() {

        /* const queryString = require('query-string');
        const parsed = queryString.parse(this.props.location.search);
        console.log("Home component did mount " + parsed.filter);        

        this.setState({
            videoId: this.props.match.params.id,
            filter: parsed.filter
        }); */

        this.setState({
            videoId: this.props.match.params.id
        });
    }

    searchOnClick(searchQuery) {
        this.setState({ filter: searchQuery });
    }

    handlerOnClick(vidId) {
        this.setState({ videoId: vidId });
    }

    render() {
        console.log("Home component render " + this.state.filter);

        return (
            <div className="App App-header">
                <Header handler={this.searchOnClick} />
                <Player videoId={this.state.videoId} />
                <VideoList filter={this.state.filter} handler={this.handlerOnClick} />
            </div>
        )
    }
}