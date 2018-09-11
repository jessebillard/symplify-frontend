import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import classNames from 'classnames'
import { connect } from 'react-redux'
import { editNote, updateNote } from '../actions/index'
import debounce from 'lodash/debounce';

class NoteEditor extends React.Component {
    constructor() {
        super()
        this.state = {
            // editorState: EditorState.createEmpty()
            editorHTML: ''
        }
    }

    handleChange = (html) => {
        if (this.props.selectedNoteId) {
            this.props.editNote(html)
            setTimeout(this.props.updateNote(this.props.selectedNoteId, this.props.selectedNoteContent), 1000)
        }
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
        selectedNoteId: state.selectedNote.id,
        selectedNoteContent: state.selectedNote.content
    }
}
              
export default connect(mapStateToProps, { editNote, updateNote })(NoteEditor)

    


    