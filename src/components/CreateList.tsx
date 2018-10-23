import * as React from 'react';
import List from '../components/List';

class CreateList extends React.Component<{add : (event : any) => void, storeProps : List[]}>  {

public render() {
     
    return (
        this.props.storeProps.map((list : List) => 

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