import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
