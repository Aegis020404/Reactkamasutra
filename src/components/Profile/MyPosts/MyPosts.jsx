import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
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
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message='It"s my first post' likesCount='23'/>
            </div>
        </div>
    )
}

export default MyPosts