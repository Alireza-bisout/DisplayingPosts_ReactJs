import React from 'react';
import SideBarLinks from './SideBarLinks';


const SideBar = (props) => {
    const sideBarLinks = props.posts ? props.posts.map((post, index) => <SideBarLinks
        title={post.title}
        handelClick={props.handelChangeCurrent}
        index={index} />) : null
    return (
        <aside>
            <ul>
                {sideBarLinks}
            </ul>
        </aside>
    );
}

export default SideBar;
