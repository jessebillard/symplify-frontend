import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Symplify</h1>
        <div className="grid">
          <header className="main-head">The header</header>
          <NoteList />
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default App;
