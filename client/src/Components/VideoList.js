import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class VideoList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            searchText: null
        };
    }

    async componentDidMount() {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            <Link to={`/vid/${video.id}`} onClick={(e) => this.props.handler(video.id, e)}>
                                <div className="card border-0" >
                                    <img src={`${SERVER_URL}/thumbnail/${video.id}`} alt={video.name} />
                                    <div className="card-body">
                                        <p className="videoTitle">{video.title}</p>
                                        <p className="videoDescription">{video.description}</p>
                                        <p>{this.props.filter}</p>
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
