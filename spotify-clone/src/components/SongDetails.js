import React, { Component } from 'react';
import { Link } from 'react-router'

class SongDetails extends Component {
    render() {
        const songs = this.props.songs.map((song, i) => {
            return <div key={i}>
                <h3>{song.title}
                    <button onClick={() => { this.props.playSong(i) }} type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                    </button></h3>
                <p>{song.description}</p>
            </div>
        })
        // console.log(this.props)
        return (
            <div className="container">
                <h2 className="text-center pageTitle">Song Details</h2>
                <Link to="/"><button>Back</button></Link>
                {songs[this.props.params.id]}
            </div>
        )
    }
}

export default SongDetails;