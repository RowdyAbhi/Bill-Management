import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BillDashboard from './components/BillDashBoard';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Bill Manager</h1>
        <BillDashboard />
      </div>
    </Provider>
  );
}

export default App;
