import React from 'react';

const Comment = (props) => {
    return (
        <div className="comment">
            <p>{props.body}</p>
        </div>
    );
}

export default Comment;
