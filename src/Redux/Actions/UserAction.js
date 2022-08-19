import { getRequest, postRequest } from '../../Helper/Api';
import * as actionTypes from './ActionTypes';

export const userSignIn = (inputData) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.API_INITIATE });
        postRequest("login", inputData)
            .then((res) => {
                console.log("res", res)
                if (res.status === 200) {
                    if (res.data.token !== undefined) {
                        localStorage.setItem(
                            "Token", res.data.token
                            // JSON.stringify(res.data.token)
                        );
                        dispatch({
                            type: actionTypes.USER_LOGIN_SUCCESS,
                            payload: res.data
                        });
                    } else {
                        dispatch({
                            type: actionTypes.USER_LOGIN_FAIL,
                            errorMsg: res.error,
                        });
                    }
                } else if (res.status === 400) {
                    dispatch({
                        type: actionTypes.USER_LOGIN_FAIL,
                        errorMsg: res.error,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.API_FAIL,
                    payload: err.message,
                });
            });
    };
};

export const getUserList = (pageNo) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.API_INITIATE });
        getRequest("users?page=" + pageNo)
            .then((res) => {
                console.log("res", res)
                if (res.status === 200) {
                    if (res.data !== undefined) {
                        dispatch({
                            type: actionTypes.USER_LIST_SUCCESS,
                            payload: res.data
                        });
                    } else {
                        dispatch({
                            type: actionTypes.USER_LIST_FAIL,
                            errorMsg: res.error,
                        });
                    }
                } else if (res.status === 400) {
                    dispatch({
                        type: actionTypes.USER_LIST_FAIL,
                        errorMsg: res.error,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.API_FAIL,
                    payload: err.message,
                });
            });
    };
};

export const getUserDetails = (userId) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.API_INITIATE });
        getRequest("users/" + userId)
            .then((res) => {
                console.log("res", res)
                if (res.status === 200) {
                    if (res.data !== undefined) {
                        dispatch({
                            type: actionTypes.USER_DETAILS_SUCCESS,
                            payload: res.data
                        });
                    } else {
                        dispatch({
                            type: actionTypes.USER_DETAILS_FAIL,
                            errorMsg: res.error,
                        });
                    }
                } else if (res.status === 400) {
                    dispatch({
                        type: actionTypes.USER_DETAILS_FAIL,
                        errorMsg: res.error,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.API_FAIL,
                    payload: err.message,
                });
            });
    };
};