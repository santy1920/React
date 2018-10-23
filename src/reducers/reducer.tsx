import { AnyAction } from 'redux';
import { ADD_TODO } from '../actions/actions';

const initialState: any = {
    todos : []
}

export default function reducer(state : any= initialState, action : AnyAction) {
    if (typeof state === undefined) {
        return initialState
    }
    switch (action.type) {
      case ADD_TODO:
      return { 
          ...state,  
            todos : initialState.todos.push(action.value),
      }
    default:
      return initialState
    }
}