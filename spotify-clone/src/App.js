import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.route.songs,
      songIndex: 0,
      songName: "Prohibition Blues",
      playing: false
    }
    this.changeSong = this.changeSong.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  changeSong(num) {

    this.setState({
      songIndex: this.state.songIndex + num,
      playing: this.state.playing ? true : false
    });
  }

  playSong(index) {
    this.setState({
      songIndex: index,
      playing: true
    })
  }

  pauseSong(index) {
    this.setState({
      songIndex: index,
      playing: false
    });
    this.player.pause()
  }

  stopSong(index) {
    this.setState({
      songIndex: index,
      playing: false
    });
    this.player.load()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playing) {
      this.player.play();
    }

    if (this.state.songIndex !== prevState.songIndex) {
      this.setState({
        songName: this.state.songs[this.state.songIndex].title
      })
    }
  }

  render() {
    let songIndex = this.state.songIndex;
    let playing = this.state.playing;
    return (
      <div className="App">
        {React.cloneElement(this.props.children, { songs: this.props.route.songs, playSong: this.playSong })}
        <div className="text-center">
          <h4>Current Song: {this.state.songName}</h4>
          <footer>
            <audio ref={(elem) => { this.player = elem }} src={this.state.songs[this.state.songIndex].source} onPlay={() => { this.playSong(this.state.songIndex) }}></audio>
            <button onClick={() => { this.changeSong(-1) }} type="button" className="btn btn-default" disabled={songIndex === 0 ? "true" : ""}>
              <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
            </button>
            <button onClick={() => { this.playSong(songIndex) }} type="button" className="btn btn-default" >
              <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
            </button>
            <button onClick={() => { this.pauseSong(songIndex) }} type="button" className="btn btn-default" >
              <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
            </button>
            <button onClick={() => { this.stopSong(songIndex) }} type="button" className="btn btn-default" >
              <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
            </button>
            <button onClick={() => { this.changeSong(1) }} type="button" className="btn btn-default" disabled={songIndex === 3 ? "true" : ""}>
              <span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
            </button>
          </footer>
        </div>
      </div>
    )
  }
}

export default App;
