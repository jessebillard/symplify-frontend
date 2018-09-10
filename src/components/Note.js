import React from 'react'

const Note = (props) => {
    return (
        <div>
            <h6>{props.title}</h6>
            <p>{props.content[0, 10]}</p>
        </div>
    )
}

export default Note