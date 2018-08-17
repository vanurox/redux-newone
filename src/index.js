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
            age: 20,
            gender: 'male'
        }
    ]
};

const store = createStore(reducer, state);
console.log(store.getState());
store.dispatch(
    {
        type:'INC'
    }
);
store.dispatch(
    {
        type: 'INC'
    }
);
console.log(store.getState());

store.dispatch(
    {
        type: 'DEC'
    }
);
console.log(store.getState());

ReactDOM.render(
            <Provider>
                <App />
            </Provider>
            , document.getElementById('root'));
registerServiceWorker();
