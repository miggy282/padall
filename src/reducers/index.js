import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { reducer as reduxFormReducer } from "redux-form";


export default combineReducers({
	form: reduxFormReducer, // mounted under "form"
    items,
    itemsHasErrored,
    itemsIsLoading
});