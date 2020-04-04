import React from 'react';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import initialState from "../initialState";
import reducer from "../reducers";
import { createBrowserHistory } from "history";

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
);

export default ProviderMock;
