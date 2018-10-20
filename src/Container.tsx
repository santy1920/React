import * as React from 'react';

import Content from './Content';
import Leftsidebar from './Leftsidebar';
import Rightsidebar from './Rightsidebar';

class Container extends React.Component <{} , {activeListId : string , activeTaskId : string}> {

    constructor(props : any) {
        super(props)
        this.state = {
            activeListId : "",
            activeTaskId : "",
        };
    }

    public set = (listId : string) => {
        this.setState({
            activeListId : listId,
        })
    }

    public setTask = (taskId : string) => {
        this.setState({
            activeTaskId : taskId,
        })
    }

    public render() {
        return (        
    <div className="container">
          <Leftsidebar set = {this.set}/>
          <Content activeListId = {this.state.activeListId} setTask = {this.setTask}/>
          <Rightsidebar activeTaskId = {this.state.activeTaskId} activeListId = {this.state.activeListId}/>
    </div>
        );
    }
}
export default Container;