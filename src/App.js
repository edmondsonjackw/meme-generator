import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';

export default function App() {
  return (
      <div>
          <Header />
          <Meme />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));