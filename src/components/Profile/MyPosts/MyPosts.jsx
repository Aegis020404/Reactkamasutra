import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";


const MyPosts = (props) => {
    let MyPostsDataElements = props.MyPostsData.map(post => <Post message={post.message} key={post.id} id={post.id} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.updateNewPostText(newText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {MyPostsDataElements}
            </div>
        </div>
    )
}

export default MyPosts