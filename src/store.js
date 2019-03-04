import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';


/*const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;*/


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
