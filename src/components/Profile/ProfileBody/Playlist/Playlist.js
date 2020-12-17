import React from 'react';
import './Playlist.css'

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SongRow from '../SongRow/SongRow';

import {useMainAppContext} from "../../../../context/MainAppContext";

const Playlist = () => {
    const [{discover_weekly}, dispatch] = useMainAppContext();
    return (
        <>
            <div className={"body__info"}>
                <img
                    src={discover_weekly?.images[0]?.url}
                    alt={""}
                />
                <div className={"body__infoText"}>
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        // onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow
                        // playSong={playSong}
                        track={item.track}
                    />
                ))}
            </div>

        </>
    )
}

export default Playlist;
