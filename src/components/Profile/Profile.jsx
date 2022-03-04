import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     MyPostsData={props.state.MyPostsData}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile