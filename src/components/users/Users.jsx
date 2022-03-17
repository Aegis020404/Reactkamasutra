import React from 'react';
import s from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
    if (!props.users.length)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                console.log(res.data.items)
                props.setUsers(res.data.items)
            })

    return (
        <div>
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