import * as React from 'react';

import Content from './Content';
import Leftsidebar from './Leftsidebar';
import Rightsidebar from './Rightsidebar';

class Container extends React.Component <{} , {activeId : string} > {

    constructor(props : any) {
        super(props)
        this.state = {
            activeId : "",
        };
    }

    public set = (listId : string) => {
        this.setState({
            activeId : listId,
        })
    }

    public render() {
        return (        
    <div className="container">
          <Leftsidebar set = {this.set}/>
          <Content activeId = {this.state.activeId}/>
          <Rightsidebar />
    </div>
        );
    }
}
export default Container;