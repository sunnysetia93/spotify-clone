import React from 'react';
import './ProfileBody.css';

import Header from './Header/Header';

const ProfileBody = ({spotify}) => {
    return (
        <div className={'profile__profile__body'}>
            <Header/>
        </div>
    );
}

export default ProfileBody;