const baseURL = 'http://localhost:3000/api/v1'

export class NotesAdapter {

    // once authentication is setup...will need to change this for getting the note for whomever signs in
    static getNotes() {
        return fetch(`${baseURL}/notes`).then(resp => resp.json())
    } 

    static createNote(data) {
        const options = {        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },                
            body: JSON.stringify(data)
            
        }
        return fetch(`${baseURL}/notes`, options).then(resp => resp.json())
    }

    static updateNote(id, data) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${baseURL}/notes/${id}`, options).then(resp => resp.json())
    }

    static deleteNote(id) {
        const options = {
            method: 'DELETE'
        }
        return fetch(`${baseURL}/notes/${id}`, options).then(resp => resp.json())
    }

}