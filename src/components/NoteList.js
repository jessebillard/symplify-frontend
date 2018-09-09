import React from 'react'
import classNames from 'classnames'


class NoteList extends React.Component {
    render() {
        return (
            <div className={classNames('col', 'left')}>
                <ul>
                    <li>List item</li>
                </ul>
            </div>
        )
    }
}

export default NoteList