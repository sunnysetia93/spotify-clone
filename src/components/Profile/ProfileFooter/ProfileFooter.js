import React from 'react';
import './ProfileFooter.css';

import {Grid, Slider} from "@material-ui/core";


import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const ProfileFooter = () => {
    return (
        <div className={"profile__footer"}>
            <div className={"profile__footer__left"}>
                <img
                    className="footer__albumLogo"
                    // src={item?.album.images[0].url}
                    // alt={item?.name}
                />
                {/*{item ? (*/}
                {/*    <div className="footer__songInfo">*/}
                {/*        <h4>{item.name}</h4>*/}
                {/*        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>*/}
                {/*    </div>*/}
                {/*) : (*/}
                <div className="footer__songInfo">
                    <h4>Yellow</h4>
                    <p>Coldplay</p>
                </div>
                {/*)}*/}
            </div>
            <div className={"profile__footer__center"}>
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize={"large"} className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>

            </div>
            <div className={"profile__footer__right"}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProfileFooter;