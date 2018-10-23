import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions/actions";
import CreateList from '../components/CreateList';
import List from '../components/List';

class Leftsidebar extends React.Component<{set : (event : any) => void,addNewList : (event : any) => void, store : List[]}, {storeProps : List[], id : string, inputValue : string , isClicked :boolean, isSelected : boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {
      id : "",
      inputValue : "",
      isClicked : false,
      isSelected : false,
      storeProps : this.props.store, 
  };
}
 

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
    let id = (this.props.store.length);
    this.props.addNewList(new List("list" + ++id  , this.state.inputValue , []));
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
      <CreateList add = {this.add} storeProps = {this.state.storeProps}/>
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

function mapStateToProps(state : any) {
  return {
    store : state.todos,
    
  }
}

function mapDispatchToProps(dispatch : any) {   
  return {
    addNewList : (value : any) => dispatch(actions.addTodo(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Leftsidebar);
