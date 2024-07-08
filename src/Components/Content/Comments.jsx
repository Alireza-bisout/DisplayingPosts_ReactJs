import React from 'react';
import Comment from './Comment';

const Comments = (props) => {

    const comment = props.data.map(data => <Comment body={data.body} />)

    return (
        <div className="comments">
            <p>Comments:</p>
            {comment}
        </div>
    );
}

export default Comments;
