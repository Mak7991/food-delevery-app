import React from 'react';

import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './screens/Login';
// import Signup from './screens/Signup';
import Signup from './screens/Signup2';

class App extends React.Component {
  state = {
    showProfile: false
  }

  afterLogin() {
    this.setState({ showProfile: true });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <header className="App-header">

              {/* <Login afterLogin={this.afterLogin.bind(this)} /> */}
              <Signup />
            </header>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
