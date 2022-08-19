import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions/index";
import * as actionTypes from "../../Redux/Actions/ActionTypes";
import { withRouter } from "react-router-dom";
import Classes from './Login.module.css';
import { useForm } from "react-hook-form";

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const {
        loginStatus,
        errorMsg,
        error,
        loader,
        userData
    } = useSelector((state) => ({
        loginStatus: state.UserReducer.loginStatus,
        error: state.UserReducer.error,
        errorMsg: state.UserReducer.errorMsg,
        loader: state.UserReducer.loader,
        userData: state.UserReducer.userData
    }));


    const onSubmit = (data) => {
        dispatch(actions.userSignIn(data));
    }

    useEffect(() => {
        if (loginStatus) {
            history.push("/user-list")
        }
    }, [loginStatus]);


    return (
        <div className={Classes.loginCon}>
            <div className={Classes.loginBox}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="fname">Email</label>
                    <input type="email" id="fname" {...register("email")} placeholder="Enter Email" />

                    <label for="lname">Password</label>
                    <input type="password" id="lname" {...register("password")} placeholder="Enter Password" />

                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);