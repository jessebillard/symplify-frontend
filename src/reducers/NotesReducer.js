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
            // console.log(action.note)
            const updatedNotes = state.notes.filter(note => note.id !== parseInt(action.note.id))
            // console.log("update", updatedNotes)
            updatedNotes.unshift(action.note)
            return {
                ...state,
                notes: updatedNotes          
            }
        case 'DELETE_NOTE':
            // most likely need to change this filter method if user selects more than 1 note to delete            
            // debugger
            console.log("delete", action.deletedNoteId)
            const filteredNotes = state.notes.filter(note => note.id !== parseInt(action.deletedNoteId.id))
            
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