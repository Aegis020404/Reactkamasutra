import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()
    console.log(state)
    let addPost = () => {
        props.store.dispatch( addPostActionCreator() )
    }

    let onPostChange = (newText) => {
        let action =  updateNewPostTextActionCreator(newText)
        props.store.dispatch( action )
    }
    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    MyPostsData={state.profilePage.MyPostsData}
                    newPostText={state.profilePage.newPostText}
    />

}

export default MyPostsContainer