import React from 'react';
import s from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import {setCurrentPageAC} from "../../redux/users-reducer";

class Users extends React.Component{
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p =>
                        <span onClick={() => this.onPageChanged(p)} key={p} id={p} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    )}
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small || userPhoto} alt="" className={s.usersPhoto}/>
                            </div>
                            <div>

                                {
                                    u.followed ?
                                        <button onClick={() => {
                                            this.props.unFollow(u.id)
                                        }}>Follow</button> :
                                        <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>unfollow</button>
                                }
                            </div>
                        </span>

                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>

                            <span>
                                {/*<div>{u.location.country}</div>*/}
                                {/*<div>{u.location.city}</div>*/}
                            </span>
                        </span>
                        </div>)
                }
            </div>
        )
    }
}

export default Users;