import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/Editor';
import { connect } from 'react-redux';
import { getNotes } from './actions/index'

class App extends Component {

  componentDidMount() {
    this.props.getNotes()
  }

  render() {
    return (
      <div className="App">
        <h1>Symplify</h1>
        <div className="grid">          
          <NoteList />
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default connect(null, { getNotes })(App);
