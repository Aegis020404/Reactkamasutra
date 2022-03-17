const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
let initialState = {
    users: [

    ]
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u=> action.userId === u.id ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=> action.userId === u.id ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }


}
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})
export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})

export default UserReducer;