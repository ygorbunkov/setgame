import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Game } from './core/game';

const game = new Game().shuffle();



ReactDOM.render(<App />, document.getElementById('root'));
