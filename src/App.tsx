import * as React from 'react';
import './todo.css';

import Container from './Container';
import Topnav from './Topnav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Topnav />
      <Container />
      </div>
    );
  }
}

export default App;
