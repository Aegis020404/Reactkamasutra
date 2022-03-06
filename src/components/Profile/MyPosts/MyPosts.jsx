import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const MyPosts = (props) => {
    let MyPostsDataElements = props.MyPostsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text:newText})
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {MyPostsDataElements}
            </div>
        </div>
    )
}

export default MyPosts