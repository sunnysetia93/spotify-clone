import React from 'react';
import './Sidebar.css'

import SidebarOption from "./SidebarOption/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useMainAppContext} from "../../context/MainAppContext";
import * as actionTypes from "../../context/actionTypes";

const Sidebar = ({spotify}) => {
    const [{playlists}, dispatch] = useMainAppContext();

    function onClickPlaylist(id) {
        spotify.getPlaylist(id).then((response) => {
            dispatch({
                type: actionTypes.SET_DISCOVER_WEEKLY,
                discover_weekly: response,
            })
        });
    }

    return (
        <div className={'sidebar'}>
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <SidebarOption Icon={HomeIcon} title={'Home'}/>
            <SidebarOption Icon={SearchIcon} title={'Search'}/>
            <SidebarOption Icon={LibraryMusicIcon} title={'My Library'}/>

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>


            {
                playlists && playlists.items && playlists.items.length > 0 ?
                    playlists?.items?.map(playlist => {
                        return <SidebarOption
                            key={playlist.id}
                            id={playlist.id}
                            title={playlist.name}
                            onClick={onClickPlaylist}
                        />
                    })
                    : <div style={{fontSize: "12px", marginLeft: "15px"}}>No Public Playlist
                        found!
                    </div>
            }

        </div>
    )
}

export default Sidebar;