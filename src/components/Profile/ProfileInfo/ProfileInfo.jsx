import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) return  <Preloader/>

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.usersPhoto} src={props.profile.photos.large || userPhoto } alt="аватарка"/>
                ava + description
            </div>
        </div>
)
}

export default ProfileInfo
