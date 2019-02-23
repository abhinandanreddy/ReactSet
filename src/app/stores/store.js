import {createStore, combineReducers, applyMiddleware} from 'redux';
import mathReducer from '../reducers/mathReducer';
import userReducer from '../reducers/userReducer';


const store = createStore(combineReducers({mathReducer, userReducer}));
export default store;

/*const myLogger = (store) => (next) => (action) => {
    console.log();
    next(action);
}*/

/*store.subscribe( () => {
    console.log("store update: ", store.getState());
})*/

