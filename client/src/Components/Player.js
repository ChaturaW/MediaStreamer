import React, { Component } from 'react'
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class Player extends Component {

    render() {   
        if (this.props.videoId == null) {
            return null;
        }

        return (
            <React.Fragment>
                <video key={this.props.videoId} controls autoPlay>
                    <source src={`${SERVER_URL}/video/${this.props.videoId}`} type="video/mp4"></source>
                </video>
            </React.Fragment>
        )
    }
}