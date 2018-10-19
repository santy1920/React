import * as React from 'react';

import SearchList from './SearchList';

class CreateTask extends React.Component<{activeId : string} > {

constructor(props : any) {
super(props);
}

public render() {
const list = SearchList.searchListById(this.props.activeId);

return (
(list != null ?
list.getTasks().map((task) =>
<div className="task-detail pointer" id= {task.getId()} key = {task.getId()} >
<i className="button1 icon fa fa-circle-o pointer" id={task.getId()}/>
<span className="list-font" id={task.getId()}>{task.getName()}</span>
<i className="button2 icon fa fa-star-o"/>
</div>
)
: "")
);
}
}
export default CreateTask;
