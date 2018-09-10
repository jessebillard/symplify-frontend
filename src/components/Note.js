import React from 'react'
import { Segment, Button, Icon, Header } from 'semantic-ui-react'

const Note = (props) => {
    // console.log(props)
    const inlineStyle = {
        button : {
          float: 'right',              
        }
      };
    return (
        <Segment clearing>
            <Header floated='left' as='h6'>{props.title}</Header> 
            <Button icon style={inlineStyle.button}>
                <Icon name='trash alternate' className="delete"/>                
            </Button>           
        </Segment>        
    )
}

export default Note