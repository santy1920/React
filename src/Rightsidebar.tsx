import * as React from 'react';

import SearchTask from './SearchTask';

class Rightsidebar extends React.Component<{activeTaskId :string , activeListId : string}> {
  public state =  {
    isDueDateSelected : false,
    isReminderSelected : false, 
    note: "",
  };
    
public setRemindDate = (event : any) => {
    this.showDatePickerToAddRemindDate();
    const task = SearchTask.searchTaskById(this.props.activeTaskId, this.props.activeListId);
    if(task !=null) {
    task.setRemindDate(event.target.value);
    }
}
   
public setDueDate = (event : any) => {
    this.showDatePickerToAddDueDate();
    const task = SearchTask.searchTaskById(this.props.activeTaskId, this.props.activeListId);
    if(task !=null) {
    task.setDueDate(event.target.value);
    }
}
        
public showDatePickerToAddRemindDate = () => {
    this.setState({
    isReminderSelected : !this.state.isReminderSelected,
    })
}

public showDatePickerToAddDueDate = () => {
    this.setState({
    isDueDateSelected : !this.state.isDueDateSelected,
    })
}

public addNote = (e : any) => {
  const task = SearchTask.searchTaskById(this.props.activeTaskId, this.props.activeListId);
  if(task !=null) {
    task.setNote(e.target.value);
  }
}

    public render() {
      const task = SearchTask.searchTaskById(this.props.activeTaskId, this.props.activeListId);
        return (
            <div className="right-sidebar">
      <div className="description">
        <div className="desc">
            <i className="icon fa fa-circle-o"/>
          <span className="right-sidebar-font">{task.getName()}</span>
          <i className="icon fa fa-star-o"/>
        </div>
      </div>
      <div className="add-to-day">
        <div className="menu">
          <a href="#"><i className="icon fa fa-sun-o"/>
            <span className="right-sidebar-buttons-font"> Add to My Day</span>
          </a>
        </div>
      </div>
      <div className="options">
        <div className="due-date" onClick = {this.showDatePickerToAddRemindDate}>
            <i className="icon fa fa-clock-o"/>
            <span className="right-sidebar-buttons-font">{task != null ? task.getRemindDate() : "Remind me"}</span>
            <input type= "date" onBlur = {this.setRemindDate} className= {this.state.isReminderSelected ? "date display-inline-block" : "date"} />
        </div>

        <div className="due-date" onClick = {this.showDatePickerToAddDueDate}>
            <i className="icon fa fa-calendar"/>
            <span className="right-sidebar-buttons-font">{task != null ? task.getDueDate() : "Add Due date"}</span>
            <input type="date" onBlur = {this.setDueDate} className= {(this.state.isDueDateSelected ? "date display-inline-block" : "date")} />
        </div>

        <div className="menu">
          <a href="#"><i className="icon fa fa-calendar-plus-o"/>
            <span className="right-sidebar-buttons-font"> Repeat</span>
          </a>
        </div>
      </div>
      <div className="note">
        <textarea className="text-area" rows={4} cols={40} placeholder="Add a note" onBlur = {this.addNote}>
        {task != null ? task.getNote() : "Add note"}
        </textarea>     
      </div>
      <div className="bottom-line">
        <div className="bottom-content">
          <i className="icon fa fa-arrow-circle-left fa-rotate-180"/>
          <span className="right-sidebar-buttons-font"> Created today</span>
          <i className="icon fa fa-trash"/>
        </div>
      </div>

    </div>
        );
    }
}
export default Rightsidebar;
