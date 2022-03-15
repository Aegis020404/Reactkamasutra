import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux/lib";


// const MyPostsContainer = (props) => {
//     let state = props.store.getState()
//     let addPost = () => {
//         props.store.dispatch( addPostActionCreator() )
//     }
//
//     let onPostChange = (newText) => {
//         let action =  updateNewPostTextActionCreator(newText)
//         props.store.dispatch( action )
//     }
//     return <MyPosts updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     MyPostsData={state.profilePage.MyPostsData}
//                     newPostText={state.profilePage.newPostText}
//     />
//
// }


let mapStateToProps = (state) => {
    return {
        MyPostsData: state.profilePage.MyPostsData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText) => {
            let action = updateNewPostTextActionCreator(newText)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer