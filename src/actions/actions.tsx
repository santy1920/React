import List from '../components/List';

export const ADD_TODO = 'ADD_TODO'

export function addTodo(newList : List) {
    return {
        type: ADD_TODO, 
        value: newList 
    }
}
  ​