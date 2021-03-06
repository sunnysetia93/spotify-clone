import React from 'react';
import './Profile.css';

import Sidebar from '../Sidebar/Sidebar';
import ProfileBody from './ProfileBody/ProfileBody';
import ProfileFooter from './ProfileFooter/ProfileFooter';

const Profile = ({spotify}) => {
    return (
        <div className={"profile"}>
            <div className={"profile__body"}>
                <Sidebar spotify={spotify}/>
                <ProfileBody spotify={spotify}/>
            </div>
            <ProfileFooter spotify={spotify}/>
        </div>
    )
}

export default Profile;