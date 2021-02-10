import * as  actionTypes from './actionTypes';

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    song: null,
    // token: "BQBdqDo0CDzOkxjPQNiMMZeSE4YL43EJB_n1VXwecMYwMuWrGuU1y26ctzGVmUbjjh0pBA-ymmC9oX_-Di24zWdsnFqKU3kToqTDWkgwcg7mQ95UYyIQxvpdLihAn1UeFJmb0UUFBMvWk0wbzUV6wbOx6ACgJb04UdgggsCK-iGRQSuKKCHb"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
        case actionTypes.SET_DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case actionTypes.SET_SONG: {
            return {
                ...state,
                song: action.song
            }
        }
        case actionTypes.SET_PLAYING: {
            return {
                ...state,
                playing: action.playing
            }
        }
        default:
            return state;
    }
}

export default reducer;