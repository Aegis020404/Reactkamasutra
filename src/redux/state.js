import {rerenderEntireTree} from '../render'
let state = {
    profilePage: {
        MyPostsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It"s my first post', likesCount: 1},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ]
    },
    sidebar: {}

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 5
    }
    rerenderEntireTree(state)
    state.profilePage.MyPostsData.push(newPost)
}
export default state

