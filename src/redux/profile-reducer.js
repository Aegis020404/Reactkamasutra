const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
let initialState = {
    MyPostsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post', likesCount: 1},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                MyPostsData: [
                    {
                        id: state.MyPostsData[state.MyPostsData.length - 1].id + 1,
                        message: state.newPostText,
                        likesCount: 2
                    },
                    ...state.MyPostsData],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
}
export const addPost = () => ({
    type: ADD_POST
})
export const updateNewPostText = (newText) => ({
    type: UPDATE_NEW_POST_TEXT, text: newText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer;