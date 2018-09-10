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
        case 'DELETE_NOTES':
            // most likely need to change this filter method if user selects more than 1 note to delete
            const filteredNotes = state.notes.filter(note => note !== action.note)
            return {
                ...state,
                notes: filteredNotes
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