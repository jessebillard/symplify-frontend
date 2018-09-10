import React from 'react'
import { Segment, Button, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectNote } from '../actions/index'

class Note extends React.Component {
    
    // console.log(props)
    handleClick = () => {
        this.props.selectNote(this.props.title)
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
                <Button icon style={inlineStyle.button}>
                    <Icon name='trash alternate' className="delete"/>                
                </Button>           
            </Segment>        
        )
    }
}

export default connect(null, { selectNote })(Note)