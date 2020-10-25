import React, { Component } from 'react'

export default class Player extends Component {

    render() {
        console.log("Player component " + this.props.videoId);

        if (this.props.videoId == null) {
            return null;
        }

        return (
            <React.Fragment>
                <video key={this.props.videoId} controls autoPlay style={{backgroundColor: "black"}}>
                    <source src={`http://192.168.1.7:4000/video/${this.props.videoId}`} type="video/mp4"></source>
                </video>
            </React.Fragment>
        )
    }
}