import React from 'react';
import {connect} from 'react-redux/lib'
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = state => ({
    users: state.usersPage.users
})
let mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),


})

export default connect(mapStateToProps, mapDispatchToProps)(Users);