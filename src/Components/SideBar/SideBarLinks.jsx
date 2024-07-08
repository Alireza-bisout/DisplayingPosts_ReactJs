// فایل SideBarLinks.jsx

import React from 'react';

const SideBarLinks = (props) => {
    const handleClick = () => {
        props.handelClick(props.index);
    };

    return (
        <li onClick={handleClick}>{props.title}</li>
    );
}

export default SideBarLinks;
