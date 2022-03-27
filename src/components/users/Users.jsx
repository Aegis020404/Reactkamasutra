import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = 20//Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.wrapPage}>
                {pages.map(p =>
                    <span onClick={() => props.onPageChanged(p)} key={p} id={p}
                          className={props.currentPage === p ? s.selectedPage + ' ' + s.page : s.page}>{p}</span>
                )}
            </div>
            <div className={s.listUsers}>
                {
                    props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small || userPhoto} alt="" className={s.usersPhoto}/>
                                    </NavLink>
                            </div>
                            <div>

                                {
                                    u.followed ?
                                        <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "0463416a-2c51-46eb-82cd-2a526a31b744"
                                                },
                                            }).then(response => {
                                                console.log(response.data.resultCode)
                                                // if (response.data.resultCode == 0)
                                                    props.unFollow(u.id)

                                            })

                                        }}>Follow</button> :
                                        <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "0463416a-2c51-46eb-82cd-2a526a31b744"
                                                },
                                            }).then(response => {
                                                // if (!response.data.resultCode)
                                                    props.follow(u.id)
                                            })
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
        </div>
    );
};

export default Users;