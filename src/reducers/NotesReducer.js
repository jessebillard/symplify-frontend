export default (state = {
    notes: [], 
    displayedNote: ''
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
                displayedNote: action.note
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                displayedNote: action.note            
            }
        case 'DELETE_NOTES':
            // most likely need to change this filter method if user selects more than 1 note to delete
            const filteredNotes = state.notes.filter(note => note !== action.note)
            return {
                ...state,
                notes: filteredNotes
            }
        default:
            return state
    }
}