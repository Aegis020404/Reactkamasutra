import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let MyPostsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post', likesCount: 23},
    ]
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
                <Post message={MyPostsData[0].message} likesCount={MyPostsData[0].likesCount}/>
                <Post message={MyPostsData[1].message} likesCount={MyPostsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts