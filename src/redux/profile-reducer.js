const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    MyPostsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post', likesCount: 1},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state, MyPostsData: [...state.MyPostsData] };

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            };
            stateCopy.MyPostsData.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.text
            return stateCopy;
        }
        default:
            return stateCopy;
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT, text: newText
})

export default profileReducer;