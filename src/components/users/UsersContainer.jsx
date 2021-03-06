import React from 'react';
import {connect} from 'react-redux/lib'
import {
    follow,
    setCurrentPage,
    setUsers,
    unFollow,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UsersAPI} from "../../api/api";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(res.totalCount)
            this.props.setUsers(res.items)
        })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        UsersAPI.getUsers(p, this.props.pageSize).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.items)
        })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}

            />
        </>
    }
}


let mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
})
// let mapDispatchToProps = dispatch => ({
//     follow: userId => dispatch(followAC(userId)),
//     unFollow: userId => dispatch(unFollowAC(userId)),
//     setUsers: users => dispatch(setUsersAC(users)),
//     setCurrentPage: page => dispatch(setCurrentPageAC(page)),
//     setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count)),
//     toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching))
// })

export default connect(
    mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
)(UsersContainer);