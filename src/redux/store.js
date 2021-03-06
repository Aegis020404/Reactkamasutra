import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
// store - OOP


let store = {
    _state: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {},


    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель .парттерн
    },

    dispatch(action) {
          this._state.profilePage =  profileReducer(this._state.profilePage, action);
          this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
          this._state.dialogsPage =  sidebarReducer(this._state.dialogsPage, action);
          this._callSubscriber(this._state)
    }
}






export default store;
window.store = store;
