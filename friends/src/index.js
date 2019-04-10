import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import { LOGIN_SUCCESS } from './actions';

const putTokenInLocalStorage = store => next => action => {
    if (action.type === LOGIN_SUCCESS) {
        localStorage.setItem('userToken', action.payload)
    }
    next(action)
}

const store = createStore(reducer, applyMiddleware(putTokenInLocalStorage, thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
