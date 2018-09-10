import {
    GET_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTES
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

export const createNote = () => {
    return dispatch => {
        NotesAdapter.createNote()
            .then(note => {
                dispatch({
                    type: CREATE_NOTE,
                    note
                })
            })
    }
}

export const updateNote = () => {
    return dispatch => {
        NotesAdapter.updateNote()
            .then(note => {
                dispatch({
                    type: UPDATE_NOTE,
                    note
                })
            })
    }
}

export const deleteNote = () => {
    return dispatch => {
        NotesAdapter.deleteNote()
            .then(note => {
                dispatch({
                    type: DELETE_NOTES,
                    note
                })
            })
    }
}