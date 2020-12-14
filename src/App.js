import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

import {getTokenFromUrl} from './spotify';

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = React.useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);

            spotify.getMe().then(user => console.log("person", user))
        }
    }, []);

    console.log('token', token);
    return (
        <div className="App">
            {token ? <Profile/> : <Login/>}
        </div>
    );
}

export default App;
