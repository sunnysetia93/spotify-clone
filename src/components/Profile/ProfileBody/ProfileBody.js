import React from 'react';
import './ProfileBody.css';

import Header from './Header/Header';
import Playlist from './Playlist/Playlist';

const ProfileBody = ({spotify}) => {
    return (
        <div className={'profile__profile__body'}>
            <Header/>
            <Playlist/>
        </div>
    );
}

export default ProfileBody;