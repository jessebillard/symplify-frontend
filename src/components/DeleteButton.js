import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index'

class DeleteButton extends React.Component {

    handleDeleteClick = () => {
        this.props.deleteNote(this.props.id)
    }

    render() {
        const inlineStyle = {
            button : {
              float: 'right',              
            }
          };
        return (
            <div>
                <Button onClick={this.handleDeleteClick} icon style={inlineStyle.button}>
                    <Icon name='trash alternate' className="delete"/>                
                </Button>  
            </div>
        )
    }
}

export default connect(null, { deleteNote })(DeleteButton)