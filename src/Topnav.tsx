import * as React from 'react';

class Topnav extends React.Component {
    public render() {
        return (
            <div className="topnav">
    <div className="left-topnav">
    <span className="todo">To-Do</span>  
    </div>
    <div className="center-topnav">
      <button type="submit" className="search fa fa-search"/>
      <input type="text" placeholder="Search.."/>
    </div>
  </div>
        );
    }
}
export default Topnav;
