import * as React from 'react';

class Content extends React.Component {
    public render() {
        return (
            <div className="content">
    <div className="content-header">
        <div className="left-content">
          <span className="mylist">My List</span>
          <a href="#"><i className="icon fa fa-ellipsis-h"/></a>
        </div>
        <div className="right-content">
          <a href="#"><i className="icon fa fa-trash-o"/></a>
          <a href="#"><i className="icon fa fa-exchange fa-rotate-90"/></a>
          <span className="list">Sort</span>
        </div>
     
     </div>
     <div className="new-task"/>

     <div className="task-list">
        <div className="add-new-task">
          <i className="fa fa-plus pointer" aria-hidden="true"/>
          <span className="list-font"> Add a Task </span>
        </div>
        <div className="add-task display-none">
            <i className="fa fa-plus pointer"/>
            <input type="text" className="task-input" placeholder="Add a task" />
            <button className="add-button add-font">ADD</button>
        </div>
       
      </div>
  </div>
        );
    }
}
export default Content;
