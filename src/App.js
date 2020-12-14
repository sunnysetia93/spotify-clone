import React, {useEffect} from 'react';
import './App.css';

import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

import {getTokenFromUrl} from './spotify';

function App() {
    const [token, setToken] = React.useState(null);

    useEffect(() => {
        const token = getTokenFromUrl();
        setToken(token);
    }, []);

    console.log('token',token && token.access_token);
    return (
        <div className="App">
            {token && token.access_token ? <Profile/> : <Login/>}
        </div>
    );
}

export default App;
