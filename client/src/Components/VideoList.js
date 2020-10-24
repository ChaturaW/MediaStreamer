import React, { Component} from 'react';


export default class VideoList extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="App App-header">
                {/* <Header/> */}
                <div className="container">
                    <div className="row">
                        {this.state.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            {/* <Link to={`/player/${video.id}`}> */}
                                <div className="card border-0">
                                    <img src={`http://192.168.1.7:4000${video.poster}`} alt={video.name} />
                                    <div className="card-body">
                                        <p>{video.name}</p>
                                        <p>{video.duration}</p>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

}
