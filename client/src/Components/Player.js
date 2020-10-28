import React, { Component } from 'react'

export default class Player extends Component {

    render() {   
        if (this.props.videoId == null) {
            return null;
        }

        return (
            <React.Fragment>
                <video key={this.props.videoId} controls autoPlay>
                    <source src={`http://192.168.1.7:4000/video/${this.props.videoId}`} type="video/mp4"></source>
                </video>
            </React.Fragment>
        )
    }
}