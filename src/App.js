import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk  from 'redux-thunk';
import reducers from './reducers';
import ReduxForm from './Components/ReduxForm';
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <div className="App">
       <ReduxForm />
      </div>
      </Provider>
    );
  }
}

export default App;
