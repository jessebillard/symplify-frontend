import {
    GET_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    SELECT_NOTE,
    EDIT_NOTE,
    UPDATE_LIST_ORDER
} from './types'
import { NotesAdapter } from '../adapters/index'

export const getNotes = () => {
    return dispatch => {
        NotesAdapter.getNotes()
            .then(notes => {
                dispatch({
                    type: GET_NOTES,
                    notes
                })
            })
    }
}

export const createNote = (data) => {
    return dispatch => {
        NotesAdapter.createNote(data)
            .then(note => {
                dispatch({
                    type: CREATE_NOTE,
                    note
                })
            })
    }
}

export const updateNote = (id, data) => {
    return dispatch => {
        NotesAdapter.updateNote(id, data)
            .then(note => {
                dispatch({
                    type: UPDATE_NOTE,
                    note
                })
            })
    }
}

export const deleteNote = (id) => {    
    return dispatch => {
        NotesAdapter.deleteNote(id)
            .then(deletedNoteId => {
                dispatch({
                    type: DELETE_NOTE,
                    deletedNoteId
                })
            })
    }
}

export const selectNote = (noteTitle) => {
    return {
        type: SELECT_NOTE,
        noteTitle
    }
}

export const editNote = (content) => {
    return {
        type: EDIT_NOTE,
        content
    }
}

export const updateListOrder = (notes) => {
    return {
        type: UPDATE_LIST_ORDER,
        notes
    }
}