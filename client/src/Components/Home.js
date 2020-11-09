import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import VideoList from './VideoList';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videoId: null,
            filter: null,
            videos: []
        };
        this.handlerOnClick = this.handlerOnClick.bind(this);
        this.searchOnClick = this.searchOnClick.bind(this);
    }

    async componentDidMount() {
        this.fetchVideos();
    }

    async fetchVideos() {
        const queryString = require('query-string');
        const parsed = queryString.parse(this.props.location.search);
        const queryParam = parsed.filter;

        let serviceURL = SERVER_URL;
        if (queryParam !== undefined) {
            if (queryParam !== 'null') {
                serviceURL += `/search?filter=${queryParam}`;
            } else {
                serviceURL += "/videos";
            }
        } else {
            serviceURL += "/videos";
        }

        const response = await fetch(serviceURL);
        const data = await response.json();

        this.setState({
            videoId: this.props.match.params.id,
            filter: parsed.filter,
            videos: [...data]
        });
    }

    searchOnClick(searchText) {
        //Clear the videos in the State to trigger re-rendering of the video list. call the fetchVideos method
        //as a callback once the state is set. This avoids race conditions caused by async setState() 
        this.setState({ filter: searchText, videos: [] }, () => this.fetchVideos());
    }

    handlerOnClick(vidId) {
        this.setState({ videoId: vidId });
    }

    render() {
        return (
            <div className="App App-header">
                <Header handler={this.searchOnClick} />
                <Player videoId={this.state.videoId} />
                <VideoList videos={this.state.videos} handler={this.handlerOnClick} />
            </div>
        )
    }
}