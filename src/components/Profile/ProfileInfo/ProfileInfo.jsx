import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) return  <Preloader/>
    console.log(props.profile)
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.usersPhoto} src={props.profile.photos.large || userPhoto } alt="аватарка"/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
)
}

export default ProfileInfo
