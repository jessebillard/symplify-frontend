import React from 'react'
import classNames from 'classnames'
import Note from './Note';
import { connect } from 'react-redux';

class NoteList extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className={classNames('col', 'left')}>
                <input type="text" placeholder="search" />
                <button id="new-note-button">New Note</button>
                <ul>
                    {this.props.notes.map((note, index) => 
                        <li key={index}>
                            <Note title={note.title} content={note.content}/>
                        </li> 
                    )}                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteList)