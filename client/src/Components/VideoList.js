import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class VideoList extends Component {

    constructor() {
        super();
        this.state = {
            videos: []
        };
    }

    async componentDidMount() {
        try {  
            console.log("video list did mount - " + this.props.filter);

            const response = await fetch(`${SERVER_URL}/videos`);
            const data = await response.json();
            this.setState({ videos: [...data] });            
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="container">
                <p>{this.state.filter}</p>
                <div className="row">
                    {this.state.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            <Link to={`/vid/${video.id}`} onClick={(e) => this.props.handler(video.id, e)}>
                                <div className="card border-0" >
                                    <img src={`${SERVER_URL}/thumbnail/${video.id}`} alt={video.name} />
                                    <div className="card-body">
                                        <p className="videoTitle">{video.title}</p>
                                        <p className="videoDescription">{video.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
