import * as React from 'react';

import Content from './Content';
import Leftsidebar from './Leftsidebar';
import Rightsidebar from './Rightsidebar';

class Container extends React.Component {
    public render() {
        return (        
    <div className="container">
          <Leftsidebar />
          <Content />
          <Rightsidebar />
    </div>
        );
    }
}
export default Container;
