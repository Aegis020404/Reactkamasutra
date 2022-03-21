import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
                <div>
                    {pages.map(p =>
                        <span onClick={() => props.onPageChanged(p)} key={p} id={p} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    )}
                </div>
                {
                    props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small || userPhoto} alt="" className={s.usersPhoto}/>
                            </div>
                            <div>

                                {
                                    u.followed ?
                                        <button onClick={() => {
                                            props.unFollow(u.id)
                                        }}>Follow</button> :
                                        <button onClick={() => {
                                            props.follow(u.id)
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
    );
};

export default Users;