import 'bootstrap/scss/bootstrap.scss';
require("./_custom.scss");

import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ), document.getElementById('app'));