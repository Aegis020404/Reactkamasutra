import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.state.newPostText}
                     MyPostsData={props.state.MyPostsData}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile