import * as React from 'react';

import Content from './Content';
import Leftsidebar from './Leftsidebar';
import Rightsidebar from './Rightsidebar';

class Container extends React.Component <{} , {activeListId : string , activeTaskId : string, isTaskImportant : boolean, isTaskFavorite : boolean}> {

    constructor(props : any) {
        super(props)
        this.state = {
            activeListId : "",
            activeTaskId : "",
            isTaskFavorite : false,
            isTaskImportant : false,
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

    public setTaskImportant = (taskId : string) => {
        this.setState({
            isTaskImportant : !this.state.isTaskImportant,
        })
    }

    public setTaskFavorite = (taskId : string) => {
        this.setState({
            isTaskFavorite : !this.state.isTaskFavorite,
        })
    }

    public render() {
        return (        
    <div className="container">
          <Leftsidebar set = {this.set}/>
          <Content activeListId = {this.state.activeListId} setTask = {this.setTask} setTaskImportant = {this.setTaskImportant} setTaskFavorite = {this.setTaskFavorite}/>
          <Rightsidebar activeTaskId = {this.state.activeTaskId} activeListId = {this.state.activeListId} isTaskImportant = {this.state.isTaskImportant} isTaskFavorite = {this.state.isTaskFavorite}/>
    </div>
        );
    }
}
export default Container;