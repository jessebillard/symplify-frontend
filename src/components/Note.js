import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectNote, deleteNote } from '../actions/index'
import DeleteButton from './DeleteButton';

class Note extends React.Component {
    
    // console.log(props)
    handleClick = () => {
        // console.log("shit fired")
        this.props.selectNote(this.props.title)
    }

    // handleDeleteClick = () => {
    //     this.props.deleteNote(this.props.id)
        // console.log(this.props.id)
        // debugger;
    // }

    render() {
        // const inlineStyle = {
        //     button : {
        //       float: 'right',              
        //     }
        //   };
        return (
            <Segment clearing onClick={this.handleClick}>
                <Header floated='left' as='h6'>{this.props.title}</Header> 
                <DeleteButton id={this.props.id} />          
            </Segment>        
        )
    }
}

export default connect(null, { selectNote, deleteNote })(Note)