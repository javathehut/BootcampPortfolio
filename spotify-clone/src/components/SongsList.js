import React, { Component } from 'react';
import { Link } from 'react-router';

class SongsList extends Component {
    render() {
        const songs = this.props.songs.map((song, i) => {
            return <tr key={i}>
                <td><h4><Link to={"songs/" + song.id}>{song.title}</Link></h4></td>
                <td><button onClick={() => { this.props.playSong(i) }} type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                </button></td>
            </tr>
        })
        // console.log(this.props)
        return (
            <div className="container">
                <h2 className="text-center pageTitle">Songs List</h2>
                <table className="table table-hover">
                    <tbody>
                        {songs}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SongsList;