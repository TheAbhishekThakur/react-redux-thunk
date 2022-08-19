import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions/index";

const UserDetails = ({ history }) => {
    console.log("history", history);
    const dispatch = useDispatch();

    const [userId, setUserId] = useState(history.location.state);

    const {
        loader,
        userData,
        error,
        errorMsg
    } = useSelector((state) => ({
        loader: state.UserReducer.loader,
        userData: state.UserReducer.userData,
        error: state.UserReducer.error,
        errorMsg: state.UserReducer.errorMsg,
    }));

    useEffect(() => {
        dispatch(actions.getUserDetails(userId))
    }, [userId]);

    console.log("userData", userData)
    return (
        <div>
            <h1>User Details</h1>
        </div>
    );
}

export default withRouter(UserDetails);