import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
const MyPosts = (props) => {
    let MyPostsDataElements = props.state.MyPostsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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