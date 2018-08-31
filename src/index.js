import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/UserReducer';
import registerServiceWorker from './registerServiceWorker';





const state = {
    count: 0,
    students: 15,
    admissions: [
        {
            name: 'Varun',
            age: 28,
            gender: 'male'
        }
    ]
};

const store = createStore(
            reducer, 
            state,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );


ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
            , document.getElementById('root'));
registerServiceWorker();
