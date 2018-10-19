import * as React from 'react';

class Rightsidebar extends React.Component {
    public render() {
        return (
            <div className="right-sidebar">
      <div className="description">
        <div className="desc">
            <i className="icon fa fa-circle-o"/>
          <span className="right-sidebar-font"/>
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
        <div className="menu">
          <a href="#"><i className="icon fa fa-clock-o"/>
            <span className="right-sidebar-buttons-font"> Remind me</span>
          </a>
        </div>
        <div className="due-date">
            <i className="icon fa fa-calendar"/>
            <input type="date" className="date display-none"/>
            <span className="right-sidebar-buttons-font"> Add due date</span>
        </div>
        <div className="menu">
          <a href="#"><i className="icon fa fa-calendar-plus-o"/>
            <span className="right-sidebar-buttons-font"> Repeat</span>
          </a>
        </div>
      </div>
      <div className="note">
        <textarea className="text-area"/>        
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
