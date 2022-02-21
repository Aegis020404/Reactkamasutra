
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div>
        <div>
          <img className={classes.content_img} src='https://im0-tub-ru.yandex.net/i?id=ce51d74876b33e2968dc1a09b088c121-l&n=13' alt='background'/>
        </div>
        <div>
        ava + description
        </div>
       <MyPosts/>
      </div>
    )
}

export default Profile