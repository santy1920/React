import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Container from './components/Container';
import Topnav from './containers/Topnav';
import rootReducer from './reducers/reducer';
import './todo.css';


const store = createStore(rootReducer);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Topnav />
      <Container/>
      </div>
      </Provider>
    );
  }
}

export default App;


