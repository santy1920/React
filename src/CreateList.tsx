import * as React from 'react';

import List from './List';   
import TodoList from './TodoList';

class CreateList extends React.Component<{add : (event : any) => void}>  {

public render() {
    return (
        TodoList.map((list : List) => 

        <div key={list.getId()} className="list-icon" id={list.getId()} onClick= {this.props.add}>
        <a>
            <i className="fa fa-list-ul icon"/>
            <span className="list-name"> {list.getName()} </span>
        </a>
        </div>
        )
   );
}
}
export default CreateList;