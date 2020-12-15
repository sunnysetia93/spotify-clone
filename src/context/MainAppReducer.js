import * as  actionTypes from './actionTypes';

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
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
        default:
            return state;
    }
}

export default reducer;