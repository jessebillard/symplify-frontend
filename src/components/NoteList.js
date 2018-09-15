import React from 'react'
import classNames from 'classnames'
import Note from './Note';
import { connect } from 'react-redux';
import { Input, Button, Icon, Modal } from 'semantic-ui-react'
import { createNote } from '../actions/index'

class NoteList extends React.Component {

    constructor() {
        super()
        this.state = {
            modalOpen: false,
            newNoteTitle: '',
            searchInput: ''
        }
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
        const newNoteData = new FormData()
        newNoteData.append('title', this.state.newNoteTitle)
        this.props.createNote(newNoteData)
    }

    newNoteTitle = (e) => {
        this.setState({
            newNoteTitle: e.target.value
        }, () => console.log(this.state))
    }

    handleSearch = (e) => {
        this.setState({
            searchInput: e.target.value
        }, () => console.log(this.state))
    }

    render() {        
        const inlineStyle = {
            button : {
              float: 'right',              
            }
          };
        return (
            <div>
                <Modal dimmer={"inverted"} centered size="mini" open={this.state.modalOpen}>                                    
                    <Modal.Header>Give This Note a Title!</Modal.Header>
                    <Modal.Content>
                        <Input focus onChange={this.newNoteTitle} placeholder='title...'/>
                    </Modal.Content>
                    <Modal.Actions>                                    
                        <Button positive onClick={this.closeModal} icon='checkmark' labelPosition='right' content='Got it!' />
                    </Modal.Actions>                                    
                </Modal> 
                <div className={classNames('col', 'left')}>                    
                    <Input icon='search' onChange={this.handleSearch} placeholder='Search...' />
                    <Button icon style={inlineStyle.button} onClick={this.openModal}>
                        <Icon name='plus' />
                    </Button>   
                    <div className="list">
                        {this.props.notes.map((note, index) => {
                            if (this.state.searchInput) {
                                if (note.title.toLowerCase().includes(this.state.searchInput.toLowerCase())) {                                
                                    return <Note key={index} id={note.id} title={note.title} content={note.content}/>
                                }
                            } else {
                                return <Note key={index} id={note.id} title={note.title} content={note.content}/>
                            }
                        }
                        )}                                                                
                    </div>
                                 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, { createNote })(NoteList)