import * as actionTypes from "../Actions/ActionTypes";

const initialState = {};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.API_FAIL:
            return {
                ...state,
                loader: false,
                errorMsg: action.payload,
                emailSent: false,
            };
        case actionTypes.API_INITIATE:
            return {
                ...state,
                loader: true,
                errorMsg: undefined,
                emailSent: undefined,
                signUpSuccessMsg: undefined,
                msg: undefined,
            };
        case actionTypes.CLEAR:
            return {
                ...state,
                errorMsg: undefined,
                emailSent: undefined,
                signUpSuccessMsg: undefined,
                msg: undefined,
                emailVerified: undefined,
                loginStatus: undefined
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loader: false,
                loginStatus: true,
                userData: action.payload
            };
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.errorMsg,
            };

        case actionTypes.USER_LIST_SUCCESS:
            return {
                ...state,
                loader: false,
                userList: action.payload,
            };
        case actionTypes.USER_LIST_FAIL:
            return {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.errorMsg,
            };

        case actionTypes.USER_DETAILS_SUCCESS:
            return {
                ...state,
                loader: false,
                userData: action.payload,
            };
        case actionTypes.USER_DETAILS_FAIL:
            return {
                ...state,
                loader: false,
                error: true,
                errorMsg: action.errorMsg,
            };
        default:
            return state;
    }
};

export default UserReducer;