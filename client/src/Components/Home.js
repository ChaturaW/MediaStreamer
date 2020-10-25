import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import VideoList from './VideoList';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videoId: null
        };
        this.handlerOnClick = this.handlerOnClick.bind(this);
    }
  
    handlerOnClick(vidId){
        console.log("handler in parent " + vidId);
        this.setState({ videoId: vidId });       
    }

    render() {
        return (
            <div className="App App-header">
                <Header />
                <Player videoId={this.state.videoId}/>
                <VideoList handler={this.handlerOnClick} />               
            </div>
        )
    }
}