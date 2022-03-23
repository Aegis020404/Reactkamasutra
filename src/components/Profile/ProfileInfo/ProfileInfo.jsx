import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content_img}
                     src='https://sun9-45.userapi.com/impf/QlIxdY6plAFziDpVDQgRhNd5mj1m3mZq-Lu_Ig/hqAi_P0qs00.jpg?size=595x807&quality=96&sign=60f58860c2b45b024461502bb5edbcc5&type=album' width='200' height='200' alt='background'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
)
}

export default ProfileInfo
