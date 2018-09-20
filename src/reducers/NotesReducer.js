export default (state = {
    notes: [], 
    selectedNote: ''
}, action) => {
    switch (action.type) {
        case 'GET_NOTES':
            return {  
                ...state,              
                notes: action.notes
            }
        case 'CREATE_NOTE':            
            return {
                notes: [action.note, ...state.notes],
                selectedNote: action.note
            }
        case 'UPDATE_NOTE':            
            const noteToUpdate = state.notes.find(note => note.id === parseInt(action.note.id, 10))
            const index = state.notes.indexOf(noteToUpdate)
            const updatedNotes = state.notes.filter(note => note.id !== parseInt(action.note.id, 10))
            updatedNotes.splice(index, 0, action.note)
            return {
                ...state,
                notes: updatedNotes          
            }
        case 'DELETE_NOTE':

            const filteredNotes = state.notes.filter(note => note.id !== parseInt(action.deletedNoteId.id, 10))
            
            if (state.selectedNote.id === parseInt(action.deletedNoteId.id, 10)) {
                return {
                    notes: filteredNotes,
                    selectedNote: ''
                }
            } else {
                return {
                    ...state,
                    notes: filteredNotes
                }
            }
        case 'SELECT_NOTE':
            const note = state.notes.find(note => note.title === action.noteTitle)
            return {
                ...state,
                selectedNote: note
            }
        case 'EDIT_NOTE':
            const newNote = Object.assign({}, state.selectedNote)
            newNote.content = action.content
            return {
                ...state,
                selectedNote: newNote
            }
        case 'UPDATE_LIST_ORDER':            
            return {
                ...state,
                notes: action.notes
            }

        default:
            return state
    }
}