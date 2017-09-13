import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './index.css';

function Song(source, title, description, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/prohibition-blues.mp3', 'Prohibition Blues', 'Inspired by the Jazz Age, 1920s piano riff punctuated by saxophone breaks evokes speakeasy scenes. Tempo: 130bpm', 0),
  new Song('/shenanigans.mp3', 'Shenaniganery', 'Ridiculous, circus-styled loonery with silly tuba, comic boings, pratfalls and various gastric effects rendered in glorious stereo. Tempo: 150bpm', 1),
  new Song('/the-big-score.mp3', 'The Big Score', 'Badass blaxpoitation soundtrack including funky guitars, horns and electric piano over a repetitive beat. Tempo: 137bpm', 2),
  new Song('/moosehead-honk.mp3', 'Moosehead Honk', 'Yee-ha! Pistol-packin outlaw guitars gallop over a fast backwoods  beat, relaxing only for a slide guitar interlude. Tempo: 160bpm', 3)
]

ReactDOM.render((
  <Router history={browserHistory}>
    <Route songs={songs} path="/" component={App}>
      <IndexRoute component={SongsList} />
      <Route path="songs" component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
), document.getElementById('root'));
