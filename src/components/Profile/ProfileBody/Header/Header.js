import React from 'react';
import './Header.css';

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


const Header = () => {
    return (
        <div className={"header"}>
            <div className={"header__left"}>
                <SearchIcon/>
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className={"header__right"}>
                <Avatar src={""} alt={"SS"} />
                <h4>Sunny Setia</h4>
            </div>
        </div>
    )
}

export default Header;