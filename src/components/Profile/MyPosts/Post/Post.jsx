import s from './Post.module.css'

const Post = (props) => {
    return (
          <div className={s.item}>
            <img src="https://i.pinimg.com/originals/e3/49/38/e349389c74eae752baaa5b53b851de5e.jpg" alt="avatar"/>
            {props.message}
            <div>
              <span>like</span> {props.likesCount}
            </div>
          </div>
    )
}

export default Post