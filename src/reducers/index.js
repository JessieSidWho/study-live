import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer';
import colorReducer from './colorReducer';


export default combineReducers({
    
    auth: authReducer,
    form: reduxForm,
    color: colorReducer,
    
});