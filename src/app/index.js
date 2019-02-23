import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './stores/store';
import AppComponent from './containers/AppComponent';

ReactDOM.render(
    <Provider store = {store}>
        <AppComponent/>
    </Provider>,
    document.getElementById('root')
 );