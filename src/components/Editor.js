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
        const modules = {
            toolbar: [
              [{ 'header': [1, 2, 3, false] }],
              ['bold', 'italic', 'underline','strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
          }
        
          const formats = {formats: [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
          ]}
        return (
            <div>
                <div className={classNames('col', 'right')}>     
                    <ReactQuill 
                        theme='snow'
                        onChange={this.handleChange}                        
                        value={this.props.selectedNoteContent}
                        modules={modules}
                        formats={formats}
                        bounds={'.app'}
                        placeholder='Enter text here...'
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

    


    