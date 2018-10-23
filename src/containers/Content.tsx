import * as React from 'react';

import CreateTask from '../components/CreateTask';
import SearchList from '../components/SearchList';
import Task from '../components/Task';

class Content extends React.Component<{setTaskImportant : (event : any) => void ,setTaskFavorite : (event : any) => void , activeListId :string , setTask : (event : any) => void} , {id : string, inputValue : string , isSelected :boolean}> { 

constructor(props: any) {
    super(props);
    this.state = {
        id : "",
        inputValue : "",
        isSelected : false,
    };
}

public setTaskId = (event : any) => {
    this.props.setTask(event.target.id);
    this.setState({
        id : event.target.id,
    })    
}

public showTask = () => {
    const list = SearchList.searchListById(this.props.activeListId);
    if ( list == null ) {
    alert("no value");
    } else {
    let id = list.getTasks().length;
    // tslint:disable-next-line:no-console
    console.log(list);
    list.getTasks().push(new Task("task" + ++id, this.state.inputValue));
    }
    this.showAddTask();
    this.setState({
        inputValue : "",
    })  
}

public setTask = (event : any) => {
    this.setState({
        inputValue :event.target.value,
    })
}

public showAddTask = () => {
    this.setState({
    isSelected : !this.state.isSelected ,
    })
}
    
public render() {
    const list = SearchList.searchListById(this.props.activeListId);
        return (
            <div className="content">
    <div className="content-header">
        <div className="left-content">
          <span className="mylist">
          { (list == null) ? "My List" : list.getName()}</span>
          <a href="#"><i className="icon fa fa-ellipsis-h"/></a>
        </div>
        <div className="right-content">
          <a href="#"><i className="icon fa fa-trash-o"/></a>
          <a href="#"><i className="icon fa fa-exchange fa-rotate-90"/></a>
          <span className="list">Sort</span>
        </div>
     
     </div>
     <div className="new-task">
     <CreateTask activeListId = {this.props.activeListId} setTaskId = {this.setTaskId} setTaskImportant = {this.props.setTaskImportant} setTaskFavorite = {this.props.setTaskFavorite}/>
     </div>
    

     <div className="task-list">
        <div className={"add-new-task" + (this.state.isSelected ? " display-none" : "") } onClick = {this.showAddTask}>
          <i className="fa fa-plus pointer" aria-hidden="true"/>
          <span className="list-font"> Add a Task </span>
        </div>
        <div className={"add-task display-none" + (this.state.isSelected ? "display-block" : "")}>
            <i className="fa fa-plus pointer"/>
            <input type="text" className="task-input" placeholder="Add a task" onChange = {this.setTask} />
            <button className="add-button add-font" onClick = {this.showTask} >ADD</button>
        </div>
       
      </div>
  </div>
        );
    }
}
export default Content;
    