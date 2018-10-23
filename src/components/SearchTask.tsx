import SearchList from './SearchList';
import Task from './Task';   

class SearchTask {

public searchTaskById(taskId : string, listId : string){
let task: Task = new Task("" , "");
const list : any = SearchList.searchListById(listId); 
for(const todotask of list.getTasks()) {
    if(todotask !== undefined && todotask.getId() === taskId ) {
    task = todotask;
    } 
}
return task;
}
}
export default new SearchTask();