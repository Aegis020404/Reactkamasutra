import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content_img}
                     src='https://im0-tub-ru.yandex.net/i?id=ce51d74876b33e2968dc1a09b088c121-l&n=13' alt='background'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
)
}

export default ProfileInfo
