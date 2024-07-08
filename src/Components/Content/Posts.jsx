import React from 'react';

const Posts = (props) => {
    return (
        <div className="post">
            <img src={`/assets/${props.data.image}`} alt="" />
            <h1>{props.data.title}</h1>
            <div>{props.data.body}</div>
        </div>
    );
}

export default Posts;
