import React from 'react';
import {connect} from 'react-redux/lib'
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, setTotalUsersCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setTotalUsersCount(res.data.totalCount)
            this.props.setUsers(res.data.items)
        })
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        })

    }
    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}

        />

    }
}



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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);