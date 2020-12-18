import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({id, title, Icon, onClick}) => {
    return <div className={'sidebarOption'} onClick={() => {
        if (!Icon) onClick(id)
    }}>
        {Icon && <Icon className={"sidebarOption__icon"}/>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
}

export default SidebarOption;