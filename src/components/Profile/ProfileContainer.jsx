import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from 'react-redux/lib'
import {setUserProfile} from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
class ProfileContainer extends Component {
    componentDidMount() {
    let userId = this.props.params.userId;
    console.log(userId)
    if(!userId) userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const ProfileURLMatch = (props) => {
    const params = useParams('./profile/:userId');
    // console.log(props.profile.userId)
    return <ProfileContainer {...props} params={params}/>
}

export default connect( mapStateToProps, { setUserProfile } )(ProfileURLMatch);