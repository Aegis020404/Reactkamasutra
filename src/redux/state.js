let rerenderEntireTree
let state = {
    profilePage: {
        MyPostsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It"s my first post', likesCount: 1},
        ],
        newPostText: ''
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
window.state = state;


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 5
    }
    state.profilePage.MyPostsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)

}

export const subscribe = observer => {
    rerenderEntireTree = observer; // наблюдатель .парттерн
}

export default state

// strore - OOP
