import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions/index";
import * as actionTypes from "../../Redux/Actions/ActionTypes";
import { withRouter } from "react-router-dom";
import Classes from './UserList.module.css';

const UserList = ({ history }) => {

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const {
        loader,
        userList,
        error,
        errorMsg
    } = useSelector((state) => ({
        loader: state.UserReducer.loader,
        userList: state.UserReducer.userList,
        error: state.UserReducer.error,
        errorMsg: state.UserReducer.errorMsg,
    }));

    useEffect(() => {
        let pageNo = 1
        dispatch(actions.getUserList(pageNo))
    }, [])

    useEffect(() => {
        setData(userList.data)
    }, [userList]);

    const gotoUserDetails = (userId) => {
        history.push("/user-details", userId)
    }

    if (loader) {
        return (
            <div style={{ textAlign: "center" }}>
                Loading...
            </div>
        )
    } else if (userList) {
        return (
            <div>
                <div className={Classes.heading}>
                    <h1>USER LIST</h1>
                </div>

                <div className={Classes.headStrip}>
                    <div>Id</div>
                    <div>Email</div>
                    <div>First Name</div>
                    <div>Last Name</div>
                    <div>Image</div>
                </div>
                {data.length > 0 ?
                    data.map((item) =>
                        <div className={Classes.dataStrip} onClick={() => gotoUserDetails(item.id)}>
                            <div>{item.id}</div>
                            <div>{item.email}</div>
                            <div>{item.first_name}</div>
                            <div>{item.last_name}</div>
                            <div>
                                <img src={item.avatar} />
                            </div>
                        </div>) : null}
            </div>
        );
    } else {
        return (
            <div>
                Data Not Found...
            </div>
        )
    }
}

export default withRouter(UserList);