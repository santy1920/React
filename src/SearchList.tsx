import List from './List';   
import TodoList from './TodoList';

class SearchList {

public searchListById(listId : string){
let list: List = new List("" , "" , []);
for(const todolist of TodoList) {
    if(todolist.getId() === listId ) {
    list = todolist;
    }
}
return list;
}
}
export default new SearchList();