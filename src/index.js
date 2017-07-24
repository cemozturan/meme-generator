import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { fetchMemes } from './actions';

/*
Without using applyMiddleware(thunk) during the store creation, we were getting the following error:

VM239 bundle.js:35465 Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.

The reason was that the "fetchMemes()" call is returning an async function, not a plain object. The solution is to
use the "thunk" as a middleware.
*/

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
