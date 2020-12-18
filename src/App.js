import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

import {useLocalStorageState} from './utils';
import {getTokenFromUrl} from './spotify';
import {useMainAppContext} from './context/MainAppContext';
import * as actionTypes from './context/actionTypes';

const spotify = new SpotifyWebApi();

function App() {
    const [, dispatch] = useMainAppContext();
    const [token, setToken] = useLocalStorageState('sc-token', null);
    useEffect(() => {
        if (!token) {
            const hash = getTokenFromUrl();
            window.location.hash = "";
            const _token = hash.access_token || null;
            setToken(_token)
            spotify.setAccessToken(_token);
        } else
            spotify.setAccessToken(token);


        if (token) {
            spotify.getMe().then(userInfo => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: userInfo
                });
            }).catch(err => {
                setToken(null);
            })

            spotify.getUserPlaylists().then(playlists => {
                dispatch({
                    type: actionTypes.SET_PLAYLISTS,
                    playlists
                });
                const items = playlists.items;
                if (items && items.length > 0) {
                    const id = items[0].id;
                    spotify.getPlaylist(id).then((response) => {
                        dispatch({
                            type: actionTypes.SET_DISCOVER_WEEKLY,
                            discover_weekly: response,
                        })
                    });
                }
            });

            //


        }
    }, [dispatch, setToken, token]);

    return (
        <div className="App">
            {token ? <Profile spotify={spotify}/> : <Login/>}
        </div>
    );
}

export default App;
