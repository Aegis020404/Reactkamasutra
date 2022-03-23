import React from 'react';
import {connect} from 'react-redux/lib'
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unFollowAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from './../../assets/images/spinner.svg'
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(res.data.totalCount)
            this.props.setUsers(res.data.items)
        })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items)
        })

    }

    render() {

        return <>
            {this.props.isFetching ? <div > <img src={preloader} alt="preloader" /> </div> : null}
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
let mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: page => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count)),
    toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching))

})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);