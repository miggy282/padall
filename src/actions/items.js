import axios from "axios";

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(values) {
return (dispatch) => {
        console.log(values)
        itemsIsLoading(true);

 axios
     .post('https://protected-cove-49317.herokuapp.com//client/v1/search', {data: values},{
        headers: {
            'Content-Type': 'application/json'
     }})
     .then((response) => console.log(response))
     .then((response) => {
               /*if (!response.ok) {
                    throw Error(response.statusText);
                }*/

               dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {  
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}