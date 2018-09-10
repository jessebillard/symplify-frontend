import { createStore, applyMiddleware, compose } from 'redux'
import NotesReducer from './reducers/NotesReducer'
import thunk from "redux-thunk"


export function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(NotesReducer, composeEnhancers(applyMiddleware(thunk))
  );
}

export const store = configureStore()