import React from 'react';
import {connect} from 'react-redux/lib'
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})
let mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: page => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count))

})

export default connect(mapStateToProps, mapDispatchToProps)(Users);