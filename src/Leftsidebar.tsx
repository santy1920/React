import * as React from 'react';

import CreateList from './CreateList';
import List from './List';
import TodoList from './TodoList';

class Leftsidebar extends React.Component<{set : (event : any) => void}> {
  public state =  {
    id : "",
    inputValue : "",
    isClicked : false,
    isSelected : false, 
};

public add = (event : any) => {
  this.props.set(event.target.parentNode.id);
  this.setState({
    id : event.target.id,
  })
}

public toggleSideNav = () => {
  this.setState({
      isClicked : !this.state.isClicked ,
})
}

public setList = (event : any) => {
  this.setState({
      inputValue :event.target.value,
})
}
        
public showList = () => {
    let id = (TodoList.length);
    TodoList.push(new List("list" + ++id  , this.state.inputValue , []));
    this.showAddList();
    
}

public showAddList = () => {
  this.setState({
    inputValue : "",
    isSelected : !this.state.isSelected,
})

}

public render() {
        return (
            <div className= {"left-sidebar " + (this.state.isClicked ? "adjust-left-sidebar" : "")}>
            <div className="bars" >
        <a href="#"><i className="icon fa fa-bars" onClick = {this.toggleSideNav}/>
        </a>
           </div>
      <div className="menu">
        <a href="#"><i className="icon fa fa-sun-o"/>
          <span className={"left-sidebar-font" + (this.state.isClicked ? " display-none" : "")}>My Day</span> 
        </a>
      </div>
      <div className="menu">
        <a href="#"><i className="icon fa fa-star-o"/>
          <span className={"left-sidebar-font" + (this.state.isClicked ? " display-none" : "")}>Important</span>
        </a>
      </div>
      <div className="menu">
        <a href="#"><i className="icon fa fa-calendar"/>
          <span className={"left-sidebar-font" + (this.state.isClicked ? " display-none" : "")}>Planned</span>
        </a>
      </div>
      <div className="menu">
        <a href="#"><i className="icon fa fa-home"/>
          <span className={"left-sidebar-font" + (this.state.isClicked ? " display-none" : "")}>Tasks</span>
        </a>
      </div>

      <div className="new-menu">
      <CreateList add = {this.add}/>
      </div>

      <div className={"create-list" + (this.state.isSelected ? " display-none" : "")} onClick = {this.showAddList}>
        <a href="#"><i className="icon fa fa-plus"/>
          <span className={"list-font" + (this.state.isClicked ? " display-none" : "")}>New list</span>
        </a>
      </div>

    <div className= {"add-list display-none" + (this.state.isSelected ? "display-block" : "")}>
    <input type = "text" className="list-input" placeholder="Add a list"  onChange = {this.setList} />
    <button className={"add-list-button display-none" + (this.state.isSelected ? "display-inline-block" : "")} onClick = {this.showList}>Add List</button>
    </div>

    </div>
        );
    }
}
export default Leftsidebar;
