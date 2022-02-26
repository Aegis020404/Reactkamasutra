import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let MyPostsDataElements = props.state.MyPostsData.map(post => <Post message={post.message} likesCount={post.likesCount}/> )
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {MyPostsDataElements}
            </div>
        </div>
    )
}

export default MyPosts