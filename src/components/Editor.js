import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import classNames from 'classnames'


class NoteEditor extends React.Component {
    constructor() {
        super()
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState)
            return 'handled'
        }
        return 'not handled'
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState, 'BOLD')
        )
    }
    
    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState, 'ITALIC')
        )
    }
    
    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState, 'UNDERLINE')
        )
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.onBoldClick}><b>B</b></button>                
                <button onClick={this.onItalicClick}><em>I</em></button>
                <button onClick={this.onUnderlineClick}>U</button> */}
                <div className={classNames('col', 'right')}>
                    <h1>Editor</h1>
                    <Editor 
                        editorState={this.state.editorState} 
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                </div>
            </div>
        )
    }
}
              
export default NoteEditor

    


    