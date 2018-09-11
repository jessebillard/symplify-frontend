import React from 'react'
import { Segment, Button, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectNote, deleteNote } from '../actions/index'

class Note extends React.Component {
    
    // console.log(props)
    handleClick = (e) => {
        // console.log("shit fired")
        // if the target clicked is a button, then don't do the selectNote method
        console.log(e.target.tagName)
        if (e.target.tagName !== 'I') {
            this.props.selectNote(this.props.title)
        }
    }

    handleDeleteClick = () => {
        this.props.deleteNote(this.props.id)
        // console.log(this.props.id)
        // debugger;
    }

    render() {
        const inlineStyle = {
            button : {
              float: 'right',              
            }
          };
        return (
            <Segment clearing onClick={this.handleClick}>
                <Header floated='left' as='h6'>{this.props.title}</Header> 
                <Button onClick={this.handleDeleteClick} icon style={inlineStyle.button}>
                    <Icon name='trash alternate' className="delete"/>                
                </Button>           
            </Segment>        
        )
    }
}

export default connect(null, { selectNote, deleteNote })(Note)