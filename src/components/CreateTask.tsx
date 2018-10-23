import * as React from 'react';

import SearchList from './SearchList';

class CreateTask extends React.Component<{setTaskImportant : (event : any) => void ,setTaskFavorite : (event : any) => void,  activeListId : string , setTaskId : (event : any) => void} , {isImportant : boolean, isStarred : boolean}> {

constructor(props : any) {
super(props);
    this.state = {
        isImportant : true,
        isStarred : true,
    };
}

public setImportant = (event : any) => {
    this.setState({
        isImportant : !this.state.isImportant,
    })
    this.props.setTaskImportant(event.target.id);
}

public setFavorite = (event : any) => {
    this.setState({
        isStarred : !this.state.isStarred,
    })
    this.props.setTaskFavorite(event.target.id);
}

public render() {
const list = SearchList.searchListById(this.props.activeListId);

return (  
(list != null ?
list.getTasks().map((task) =>
<div className="task-detail pointer" id= {task.getId()} key = {task.getId()} onClick= {this.props.setTaskId}>
<i className={this.state.isImportant ? "button1 icon fa fa-circle-o pointer" : "button1 icon fa fa-check-circle pointer"} id={task.getId()} onClick={this.setImportant}/>
<span className="list-font" id={task.getId()}>{task.getName()}</span>
<i className={this.state.isStarred ? "button2 icon fa fa-star-o pointer" : "button2 icon fa fa-star pointer"} id={task.getId()} onClick = {this.setFavorite}/>
</div>
)
: "")
);
}
}
export default CreateTask;                                                      

