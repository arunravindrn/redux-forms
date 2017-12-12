import { combineReducers } from 'redux';
import FormReducer  from './FormReducer';
import 'bootstrap/dist/css/bootstrap.css';
export default combineReducers({
    forms:FormReducer
})