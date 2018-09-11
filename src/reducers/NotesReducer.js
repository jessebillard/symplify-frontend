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
                ...state,
                selectedNote: action.note
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                selectedNote: action.note            
            }
        case 'DELETE_NOTE':
            // most likely need to change this filter method if user selects more than 1 note to delete            
            // debugger
            const filteredNotes = state.notes.filter(note => note.id !== parseInt(action.deletedNoteId.id))
            // state.notes.forEach(note => console.log(typeof note.id))

            // console.log(filteredNotes)
            // console.log(typeof action.deletedNoteId.id)
            if (state.selectedNote.id === parseInt(action.deletedNoteId.id)) {
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
        default:
            return state
    }
}