import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

import {getTokenFromUrl} from './spotify';
import {useMainAppContext} from './context/MainAppContext';
import * as actionTypes from './context/actionTypes';

const spotify = new SpotifyWebApi();

function App() {
    const [{token}, dispatch] = useMainAppContext();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {

            dispatch({
                type: actionTypes.SET_TOKEN,
                token: _token
            });

            spotify.setAccessToken(_token);

            spotify.getMe().then(userInfo => {
                console.log("person", userInfo)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: userInfo
                });
            });
        }
    }, [dispatch]);

    console.log('token', token);
    return (
        <div className="App">
            {token ? <Profile spotify={spotify}/> : <Login/>}
        </div>
    );
}

export default App;
