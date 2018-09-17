import React from 'react'
import classNames from 'classnames'
import Note from './Note';
import { connect } from 'react-redux';
import { Input, Button, Icon, Modal } from 'semantic-ui-react'
import { createNote, updateListOrder } from '../actions/index'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

    reorder = (list, startIndex, endIndex) => {
        const result = [...list]
        const removed = result.splice(startIndex, 1)        
        result.splice(endIndex, 0, removed[0])
        return result
    }

    onDragEnd = (result) => {

        if (!result.destination) {
            return;
          }

        //update the redux state of the list
        const newList = this.reorder(this.props.notes, result.source.index, result.destination.index)
        // console.log(newList)
        this.props.updateListOrder(newList)
    }

    getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: 10,
        // margin: `0 0 ${grid}px 0`,
      
        // change background colour if dragging
        // background: isDragging ? 'lightgreen' : 'white',
      
        // styles we need to apply on draggables
        ...draggableStyle,
      });

    getListStyle = isDraggingOver => ({
        // background: isDraggingOver ? 'lightblue' : 'white',
        // padding: grid,
        // width: 250,
      });

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
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={this.getListStyle(snapshot.isDraggingOver)}
                                >
                                    <div className="list">
                                        {this.props.notes.map((note, index) => {
                                            if (this.state.searchInput) {
                                                if (note.title.toLowerCase().includes(this.state.searchInput.toLowerCase())) {                                
                                                    return <Draggable key={note.id} draggableId={note.id} index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={this.getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                          )}
                                                                    >
                                                                        <Note key={index} id={note.id} title={note.title} content={note.content}/>
                                                                    </div>
                                                                )}

                                                            </Draggable>
                                                }
                                            } else {
                                                return <Draggable key={note.id} draggableId={note.id} index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={this.getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                          )}
                                                                    >
                                                                        <Note key={index} id={note.id} title={note.title} content={note.content}/>
                                                                    </div>
                                                                )}

                                                            </Draggable>
                                            }
                                        }
                                        )}                                                                
                                    </div>

                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                                 
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

export default connect(mapStateToProps, { createNote, updateListOrder })(NoteList)