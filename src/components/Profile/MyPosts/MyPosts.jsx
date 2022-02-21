import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        <div className={s.pots}>
          <Post message='Hi, how are you?' likesCount='0'/>
          <Post message='It"s my first post' likesCount='23'/>
        </div>
      </div>
    )
}

export default MyPosts