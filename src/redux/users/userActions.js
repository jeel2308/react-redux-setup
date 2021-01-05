import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./actionTypes";
import axios from "axios";

export const fetchUsersRequest = () => ({
   type : FETCH_USER_REQUEST
});

export const fetchUsersSuccess = (users)=>({
    type : FETCH_USER_SUCCESS,
    payload : users
});

export const fetchUsersFailure = (err)=>({
    type : FETCH_USER_FAILURE,
    payload : err
});

export const fetchUsers = () => {
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            }).catch(error=>{
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
        });
    }
}