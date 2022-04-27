import * as axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0463416a-2c51-46eb-82cd-2a526a31b744"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(respone => respone.data)
    },
    follow(id) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${id}`)
    },
    unfollow(id) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${id}`)
    },
}
