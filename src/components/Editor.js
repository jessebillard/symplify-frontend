import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import classNames from 'classnames'
import { connect } from 'react-redux'
import { editNote } from '../actions/index'


class NoteEditor extends React.Component {
    constructor() {
        super()
        this.state = {
            // editorState: EditorState.createEmpty()
            editorHTML: ''
        }
    }

    // onChange = (editorState) => {
    //     this.setState({
    //         editorState
    //     })
    // }

    // handleKeyCommand = (command) => {
    //     const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    //     if (newState) {
    //         this.onChange(newState)
    //         return 'handled'
    //     }
    //     return 'not handled'
    // }

    // onBoldClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(
    //         this.state.editorState, 'BOLD')
    //     )
    // }
    
    // onItalicClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(
    //         this.state.editorState, 'ITALIC')
    //     )
    // }
    
    // onUnderlineClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(
    //         this.state.editorState, 'UNDERLINE')
    //     )
    // }

    handleChange = (html) => {
        // this.setState({
        //     editorHTML: html
        // })
        this.props.editNote(html)
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.onBoldClick}><b>B</b></button>                
                <button onClick={this.onItalicClick}><em>I</em></button>
                <button onClick={this.onUnderlineClick}>U</button> */}
                <div className={classNames('col', 'right')}>
                    {/* <h1>Editor</h1> */}
                    {/* <Editor 
                        editorState={this.state.editorState} 
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                    /> */}
                    <ReactQuill 
                        theme='snow'
                        onChange={this.handleChange}                        
                        value={this.props.selectedNoteContent}
                        modules={Editor.modules}
                        formats={Editor.formats}
                        bounds={'.app'}
                        placeholder='type yo stuff here foo'
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (!state.selectedNote) {
        return {
            selectedNoteContent: ''
        }
    }
    return {
        selectedNoteContent: state.selectedNote.content
    }
}
              
export default connect(mapStateToProps, { editNote })(NoteEditor)

    


    