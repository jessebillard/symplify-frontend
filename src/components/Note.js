import React from 'react'

const Note = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.title}</h3>
            {/* <p>{props.content}</p> */}
        </div>
    )
}

export default Note